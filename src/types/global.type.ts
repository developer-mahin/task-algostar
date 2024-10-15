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
  quantity?: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type TProductWithQuantity = {
  product: TProduct;
  quantity: number;
};

export type TProductState = {
  cart: TProductWithQuantity[] | null;
  parsedProduct: TProductWithQuantity[] | null;
  quantity: number;
  category: string;
};
