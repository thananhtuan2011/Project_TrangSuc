export interface IOrder {
  _id: string;
  customerName: string;
  items: number;
  price: number;
  currency: string;
  status: string;
}

export class Order {
  constructor(
      public customerName: string = "",
      public items: number = 0,
      public price: number = 0,
      public currency: string = "",
      public status: string = "In Process"
  ) {}
}
