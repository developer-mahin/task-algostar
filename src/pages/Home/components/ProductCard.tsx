import React, { useState } from "react";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "../../../Redux/hook";
import { setProductInCart } from "../../../Redux/productSlice";
import { TProduct } from "../../../types";

type TProductCard = {
  singleProduct: TProduct;
};

const ProductCard: React.FC<TProductCard> = ({ singleProduct }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: TProduct) => {
    dispatch(setProductInCart(product));
  };

  return (
    <div
      className=" bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border rounded-t-xl relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="">
        <img
          className="w-full h-60 p-3"
          src={singleProduct.image}
          alt={singleProduct.title}
        />

        {/* Overlay Options */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center space-x-4">
            <button className="text-white text-2xl hover:text-yellow-400">
              <FaHeart />
            </button>
            <button
              onClick={() => handleAddToCart(singleProduct)}
              className="text-white text-2xl hover:text-yellow-400"
            >
              <FaShoppingCart />
            </button>
            <button className="text-white text-2xl hover:text-yellow-400">
              <FaEye />
            </button>
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="w-fit capitalize px-4 py-1 bg-[#00000090] text-white rounded">
          {singleProduct.category}
        </p>
        <h3 className="text-gray-700 font-semibold text-lg mb-2">
          {singleProduct.title.slice(0, 50) + "..."}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-bold text-xl">
            ${singleProduct.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
