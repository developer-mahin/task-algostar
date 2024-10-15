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
        
      <div className="grid grid-cols-4 gap-6">
        {AllProducts.map((product: TProduct, i: number) => {
          return <ProductCard product={product} key={i} />;
        })}
      </div>
    </Container>
  );
};

export default Products;
