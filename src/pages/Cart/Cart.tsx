import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { TProductWithQuantity } from "../../types";
import { getFromLocalStorage } from "../../utils/localStorage";
import TableBodyData from "./components/TableBodyData";

const Cart = () => {
  const [parsedProduct, setParsedProduct] = useState<TProductWithQuantity[]>(
    []
  );

  useEffect(() => {
    setParsedProduct(getFromLocalStorage("cart"));
  }, [parsedProduct]);

  return (
    <Container>
      <div className=" bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

        {/* Table wrapper with horizontal scroll */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b">
                <th className="py-3">Product</th>
                <th className="py-3">Price</th>
                <th className="py-3">Quantity</th>
                <th className="py-3">Sub-total</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {parsedProduct?.map((item: TProductWithQuantity, i: number) => (
                <TableBodyData key={i} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
