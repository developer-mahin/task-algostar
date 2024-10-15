import { IoMdCloseCircle } from "react-icons/io";
import { useAppDispatch } from "../../../Redux/hook";
import {
  decreaseQuantity,
  removeProductFromCart,
  setQuantity,
} from "../../../Redux/productSlice";
import { TProductWithQuantity } from "../../../types";

type TTableBodyProps = {
  item: TProductWithQuantity;
};

const TableBodyData: React.FC<TTableBodyProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <tr className="border-b">
      <td className="py-3 flex items-center">
        <img
          src={item.product.image}
          alt={item.product.title}
          className="w-16 h-16 object-cover mr-4"
        />
        <span>{item.product.title}</span>
      </td>
      <td className="py-3">${item.product.price}</td>
      <td className="py-3 flex items-center">
        <button
          disabled={item.quantity <= 1}
          onClick={() => dispatch(decreaseQuantity(item.product.id))}
          className="text-4xl"
        >
          -
        </button>
        <input
          type="text"
          value={item.quantity}
          readOnly
          className="mx-2 w-8 text-center text-black border"
        />
        <button
          className="text-xl"
          onClick={() => dispatch(setQuantity(item.product.id))}
        >
          +
        </button>
      </td>
      <td className="py-3">${Number(item?.quantity) * item.product.price}</td>
      <td className="py-3 flex items-center">
        <button
          onClick={() => dispatch(removeProductFromCart(item.product.id))}
          className="text-red-500 hover:text-red-600"
        >
          <IoMdCloseCircle className="text-4xl" />
        </button>
      </td>
    </tr>
  );
};

export default TableBodyData;
