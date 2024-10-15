import { TProductWithQuantity } from "../types";

export const getFromLocalStorage = (storeName: string) => {
  const data = localStorage.getItem(storeName);
  let parseData;

  if (data) {
    parseData = JSON.parse(data);
  }

  return parseData;
};

export const setIntoLocalStorage = (
  storeName: string,
  item: TProductWithQuantity
) => {
  return localStorage.setItem(storeName, JSON.stringify(item));
};
