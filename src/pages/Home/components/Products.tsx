import Container from "../../../components/Shared/Container";
import Spinner from "../../../components/Shared/Spinner";
import { useGetProductQueryQuery } from "../../../Redux/Api/baseApi";
import { useAppSelector } from "../../../Redux/hook";
import { TProduct } from "../../../types";
import Filtering from "./Filtering";
import ProductCard from "./ProductCard";

const Products = () => {
  const { category, sort } = useAppSelector((state) => state.product);
  const { data: AllProducts, isLoading } = useGetProductQueryQuery({
    category,
    sort,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container className="py-20">
      <div className="flex lg:flex-row flex-col gap-6">
        {/* Filtering Options */}
        <Filtering />

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
