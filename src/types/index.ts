export type Product = {
  name: string;
  category: string;
  description: string;
  id: number;
  image: string;
  itemQuantity: number;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};
