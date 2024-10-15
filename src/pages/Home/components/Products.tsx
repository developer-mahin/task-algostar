import Container from "../../../components/Shared/Container";
import Spinner from "../../../components/Shared/Spinner";
import { useGetProductQueryQuery } from "../../../Redux/Api/baseApi";
import { TProduct } from "../../../types";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data: AllProducts, isLoading } = useGetProductQueryQuery({});

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container className="py-20">
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {AllProducts.map((product: TProduct, i: number) => {
            return <ProductCard singleProduct={product} key={i} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Products;
