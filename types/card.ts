// types/card.ts
export interface CardData {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  topTag: string;
  rating: number;
  reviews: number;
  oldPrice: number;
  price: number;
  sales: number;
}
