export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Action{
    type: string,
    payload?: any
}