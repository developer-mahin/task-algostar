import Container from "../../components/Shared/Container";
import useParsedProducts from "../../hook/useParseProduct";
import { TProductWithQuantity } from "../../types";
import TableBodyData from "./components/TableBodyData";

const Cart = () => {
  const { parsedProduct, total } = useParsedProducts();

  return (
    <Container className="my-10 grid lg:grid-cols-4 gap-6">
      <div className=" bg-white p-6 rounded-lg shadow-lg border overflow-x-auto col-span-3">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

        {/* Table wrapper with horizontal scroll */}
        <div className="">
          <div className="overflow-x-auto col-span-2">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b ">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Actions</th>
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
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border">
        <h2 className="text-2xl font-semibold mb-6">Cart Total</h2>
        <div className="mb-4">
          <p className="text-lg">
            Sub-total: <span className="float-right">${total}</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            Shipping: <span className="float-right">$0.00</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            Discount: <span className="float-right">$0.00</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            Tax: <span className="float-right">$0.00</span>
          </p>
        </div>
        <div className="mb-6">
          <p className="text-xl font-bold">Total: ${total}</p>
        </div>
        <div className="bg-orange-500 text-white w-full text-center py-2 rounded-lg font-semibold hover:bg-orange-600">
          Proceed to Checkout
        </div>

        {/* Coupon Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Coupon Code</h3>
          <input
            type="text"
            placeholder="Enter your coupon code"
            className="w-full p-2 border rounded-lg mb-3"
          />
          <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600">
            Apply Coupon
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
