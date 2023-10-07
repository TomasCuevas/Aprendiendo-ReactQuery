export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}

export interface IProductPayload {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Rating {
  rate: number;
  count: number;
}
