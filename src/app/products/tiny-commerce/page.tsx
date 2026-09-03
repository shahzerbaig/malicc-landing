import ProductPage from "@/components/product/ProductPage";
import { tinyCommerce } from "@/data/products/tiny-commerce";

export default function TinyCommercePage() {
  return (
    <ProductPage product={tinyCommerce} />
  );
}
