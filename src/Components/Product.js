import {Link} from "react-router-dom"
import "./style.css"

 function Product(props){
    const {product , showButton} = props
    return (
        <>
          <div className="card h-100 text-center p-2">
               <img src={product.image} className="card-img-top w-25 h-60 p-10 m-auto" alt="{product.title}"/>
               <div className="card-body ">
               <h5 className="card-title">{product.title}</h5>
              {/*  <p className="card-text">{product.description}</p> */}
               <p>Price : {product.price} $</p>
                <div className="text-center">
              {showButton && <Link to={`/product/${product.id}`} className="btn btn-dark">Details</Link>}
                </div>
               </div>
            </div>
        </>
    )
 }
 export default Product ;