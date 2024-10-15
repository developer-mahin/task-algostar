import Container from "../../components/Shared/Container";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { setQuantity } from "../../Redux/productSlice";
import { TProductWithQuantity } from "../../types";

const Cart = () => {
  const { parsedProduct } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
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
                  <tr key={i} className="border-b">
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
                      <button className="text-4xl">-</button>
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
                    <td className="py-3">
                      ${Number(item?.quantity) * item.product.price}
                    </td>
                    <td className="py-3 flex items-center">
                      <button className="text-red-500 hover:text-red-600">
                        &#10006;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Total */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Cart Total</h2>
          <div className="mb-4">
            <p className="text-lg">
              Sub-total: <span className="float-right"></span>
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
            <p className="text-xl font-bold">Total: </p>
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
      </div>
    </Container>
  );
};

export default Cart;
