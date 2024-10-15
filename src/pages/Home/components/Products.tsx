import Container from "../../../components/Shared/Container";
import Spinner from "../../../components/Shared/Spinner";
import {
  useGetAllCategoriesQuery,
  useGetProductQueryQuery,
} from "../../../Redux/Api/baseApi";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { setCategory } from "../../../Redux/productSlice";
import { TProduct } from "../../../types";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.product);
  const { data: AllProducts, isLoading } = useGetProductQueryQuery({
    category,
  });
  const { data: AllCategories } = useGetAllCategoriesQuery({});

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container className="py-20">
      <div className="flex gap-x-6">
        <div>
          <h2 className="text-lg font-semibold pb-4">Category</h2>
          <label className="flex items-center gap-x-1">
            <input
              type="radio"
              defaultChecked
              onChange={() => dispatch(setCategory("All"))}
              checked={category === "All"}
            />
            All
          </label>

          {AllCategories?.map((item: string) => (
            <label className="flex items-center gap-x-1 capitalize">
              <input
                onChange={() => dispatch(setCategory(item))}
                type="radio"
                checked={category === item}
                value={item}
              />
              {item}
            </label>
          ))}
        </div>

        <div className="flex-1">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {AllProducts?.map((product: TProduct, i: number) => {
              return <ProductCard singleProduct={product} key={i} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
