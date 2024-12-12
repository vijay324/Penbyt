export interface ProductDetail {
  title: string;
  description: string;
}

export interface ProductData {
  id: string;
  tag?: string; // Optional property
  title: string;
  image: string;
  description: string;
  link: string;
  rating: number;
  reviews: number;
  oldPrice?: number; // Optional property
  price: number;
  sales: number;
  discounted?: number; // Optional property
  tags?: string[]; // Optional property
  moredetails?: ProductDetail[]; // Optional property
}
