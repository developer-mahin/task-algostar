/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TProductWithQuantity } from "../types";
import { getFromLocalStorage } from "../utils/localStorage";

const useParsedProducts = () => {
  const [parsedProduct, setParsedProduct] = useState<TProductWithQuantity[]>(
    []
  );

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const storedProducts = getFromLocalStorage("cart") || [];
    setParsedProduct(storedProducts);
  }, [parsedProduct]);

  useEffect(() => {
    const calculatedTotal = parsedProduct.reduce((acc, element) => {
      return acc + element.product.price * element.quantity;
    }, 0);

    setTotal(calculatedTotal);
  }, [parsedProduct]);

  return { parsedProduct, total };
};

export default useParsedProducts;
