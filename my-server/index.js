const express = require("express")
const app = express()
const port = 5000
const morgan = require('morgan');
const {transporter} = require('./nodemailer');

// Middleware for logging

app.use(morgan("combined"));

// Middleware for parsing request bodies
const bodyParser=require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());

// Middleware for handling CORS
const cors = require("cors");
app.use(cors());

// Start the server
app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("This Web server is processed for MongoDB");
});

// Connect to MongoDB
// ...

// Connect to MongoDB
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
const database = client.db("StoreData");
const ProductCollection = database.collection("Product"); // Change this line

const AccountCollection = database.collection("Acount"); // Change this line

const OrderCollection = database.collection("Order");


app.post("/register", cors(), async (req, res) => {
  const checkdata = await AccountCollection.findOne({ email: req.body.email })
  if (checkdata) {
    let data = {
      status: 0
    }
    res.send(data);
  }
  else {
    await AccountCollection.insertOne(req.body);
    let data = {
      result: req.body,
      status: 1
    }
    res.send(data);
  }

});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email exists
    const user = await LoginCollection.findOne({ email });
    if (!user) {
      return res.status(400).send("Email not found");
    }

    // Check if password matches
    if (password !== user.password) {
      return res.status(400).send("Invalid password");
    } 

    res.status(200).send();

  } catch (error) {
    console.error("Lỗi trong endpoint đăng nhập:", error);
    res.status(500).send(error);
  }
});
// Route to get product categories
app.get("/products/categories", cors(), async (req, res) => {
  try {
    const categories = await ProductCollection.distinct("category");
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Route to get products by category
app.get("/products/category/:category", cors(), async (req, res) => {
  try {
    const category = req.params.category;
    const sort = req.query.sort;

    let cursor = ProductCollection.find({ category });

    if (sort && (sort === "asc" || sort === "desc")) {
      // Sắp xếp theo giá tăng hoặc giảm dần tùy thuộc vào giá trị của sort
      cursor = cursor.sort({ price: sort === "asc" ? 1 : -1 });
    } else if (sort) {
      return res.status(400).json({ error: 'Invalid sort value. Use "asc" or "desc".' });
    }

    const result = await cursor.toArray();

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Route to get product by ID
app.get("/products/:id", cors(), async (req, res) => {
  try {
    const productId = req.params.id;

    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }

    const result = await ProductCollection.findOne({ _id: new ObjectId(productId) });

    if (!result) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Route to get products with sorting and limiting
app.get("/products", cors(), async (req, res) => {
  try {
    const sort = req.query.sort;
    const limit = parseInt(req.query.limit) || 0;

    let cursor = ProductCollection.find();

    if (sort && (sort === "asc" || sort === "desc")) {
      cursor = cursor.sort({ price: sort === "asc" ? 1 : -1 });
    } else if (sort) {
      return res.status(400).json({ error: 'Invalid sort value. Use "asc" or "desc".' });
    }

    if (limit > 0) {
      cursor = cursor.limit(limit);
    }

    const result = await cursor.toArray();

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// thêm sản phẩm
app.post("/products",cors(),async(req,res)=>{ 
  //put json Fashion into database
  await ProductCollection.insertOne(req.body)
  //send message to client(send all database to client)
  res.send(req.body)
  }
)

// lấy danh sách tên sản phẩm
app.get("/products/list_titles", cors(), async (req, res) => {
  try {
    const titles = await ProductCollection.distinct("title");
    res.json(titles);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

//hàm xóa sản phẩm
app.delete("/products/:id",cors(),async(req,res)=>{
  //find detail Fashion with id
  var o_id = new ObjectId(req.params["id"]);
  const result = await ProductCollection.find({_id:o_id}).toArray(); 
  //update json Fashion into database
  await ProductCollection.deleteOne(
  {_id:o_id}
  )
  //send Fahsion after remove
  res.send(result[0])
})

// hàm chỉnh sửa sản phẩm 
app.put("/products", cors(), async (req, res) => {
  try {
    // Update the product in the database
    await ProductCollection.updateOne(
      { _id: new ObjectId(req.body._id) },
      {
        $set: {
          title: req.body.title,
          quantity: req.body.quantity,
          price: req.body.price,
          category: req.body.category,
          description: req.body.description,
          image: req.body.image
        }
      }
    );

    // Send the updated product back to the client
    const updatedProduct = await ProductCollection.findOne({ _id: new ObjectId(req.body._id) }).toArray();
    res.send(updatedProduct[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});
app.get("/products/search/:name", cors(), async (req, res) => {
  try {
    const partialName = req.params.name;

    // Use a case-insensitive regular expression to perform a partial match
    const result = await ProductCollection.findOne({
      title: { $regex: new RegExp(partialName, 'i') },
    });

    if (!result) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ id: result._id });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// lấy order và sắp xếp
app.get("/orders", cors(), async (req, res) => {
  try {
    const sort = req.query.sort;
    const limit = parseInt(req.query.limit) || 0;

    let cursor = OrderCollection.find();

    if (sort && (sort === "asc" || sort === "desc")) {
      cursor = cursor.sort({ price: sort === "asc" ? 1 : -1 });
    } else if (sort) {
      return res.status(400).json({ error: 'Invalid sort value. Use "asc" or "desc".' });
    }

    if (limit > 0) {
      cursor = cursor.limit(limit);
    }

    const result = await cursor.toArray();

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// thêm order
app.post("/orders",cors(),async(req,res)=>{ 
  //put json Fashion into database
  await OrderCollection.insertOne(req.body)
  //send message to client(send all database to client)
  res.send(req.body)
  }
)


//hàm xóa order
app.delete("/orders/:id",cors(),async(req,res)=>{

  var o_id = new ObjectId(req.params["id"]);
  const result = await OrderCollection.find({_id:o_id}).toArray(); 

  await OrderCollection.deleteOne(
    {_id:o_id}
  )

  res.send(result[0])
})

// hàm chỉnh sửa sản phẩm 
app.put("/orders", cors(), async (req, res) => {
  try {
    // Update the product in the database
    await OrderCollection.updateOne(
      { _id: new ObjectId(req.body._id) },
      {
        $set: {
          customerName: req.body.customerName,
          items: req.body.items,
          price: req.body.price,
          currency: req.body.currency,
          status: req.body.status
        }
      }
    );

    // Send the updated product back to the client
    const updatedProduct = await ProductCollection.findOne({ _id: new ObjectId(req.body._id) }).toArray();
    res.send(updatedProduct[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.post('/forgot-password',async(req,res)=>{
  
  try {
    const {email}=req.body
  const user = await LoginCollection.findOne({email})
  if (!user){
    return res.status(400).send('Email not found');
  }
    
    const resultSendMail = await transporter.sendMail({
    from :"Nodemailer OAuth2",
    to : email,
    subject : 'Your password',
    text: `Your password is: ${user.pass}`
  })
 console.log(resultSendMail)

  res.json("email sent!")
  } catch (error) {
    
    res.status(500).send(error.message);
  }
})