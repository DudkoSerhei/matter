export interface Product {
  id: string;
  name: string;
  new: boolean;
  image: string;
  price: number;
}

export type Products = Product[];
