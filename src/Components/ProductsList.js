import Product from "./Product";
import { useEffect, useState } from "react";
import "./style.css"

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getSpecifcCategories = (catname) => {
    console.log(catname);
    fetch(`${api_url}/category/${catname}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then((json) => console.log(json));
      
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
    <div className="container p-3 text-center">
      <h2 className="p-3 m-auto text-warning">ProductList</h2>
      <div className="container text-center ">
      <button
                onClick={() => {
                  getProducts();
                }}
                className="btn btn-dark  m-1 active rounded-4 border-2 border-warning"
              >
                All
              </button>
        {categories &&
          categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => {
                  getSpecifcCategories(cat)
                }}
                className="btn btn-dark m-1 rounded-4 "
              >
                {cat}
              </button>
            )
          })}
        
        <div className="row row-gap-2 mt-3 ">
          {products.map((product) => {
            return (
              <div className="col-4" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
}
export default ProductList;
