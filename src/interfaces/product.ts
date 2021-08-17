export interface Product {
  id: number;
  name: string;
  new?: boolean;
  image: string;
  price: number;
}

export type Products = Product[];
