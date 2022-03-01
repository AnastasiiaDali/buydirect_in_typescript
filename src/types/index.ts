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

export type Data = {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type User = {
  email?: string;
  password?: string;
};

export type LoginData = {
  email: string;
  password: string;
};
