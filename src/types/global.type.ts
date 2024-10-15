export type TNavItems = {
  title: string;
  link: string;
};

export type TProduct = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};
