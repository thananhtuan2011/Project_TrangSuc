export interface IProduct {
    _id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    quantity: number 
  }

export class Product {
  constructor(
    public title: string = "",
    public quantity: number = 0,
    public price: number = 0,
    public category: string = "",
    public description: string = "",
    public image: string = ""
  ) {}
}