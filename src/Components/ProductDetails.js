import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const params = useParams();
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch(`${url}/${params.productId}`)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <>
    <div className="container text-center m-auto p-5">
      <h2 className="text-warning"> Details page </h2>
      <Product product={products} showButton={false} />
      </div>
    </>
  );
}
export default ProductDetails;
