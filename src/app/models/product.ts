export interface Product {
  id: number;
  name: string;
  description: string;
  soldPrice: number;
  regularPrice: number;
  image: string;
  createdAt: Date;
  updatedAt?: Date; 
  categories: string[]; 
  isFavorite?:boolean
}