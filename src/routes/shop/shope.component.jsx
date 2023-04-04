import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from '../../component/product-card/product.component'
import './shop.style.scss'

const Shope =() =>{

    const {products} = useContext(ProductsContext);
    return (
        <div className="products-container">
            {products.map((product)=>(
               <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}
export default Shope;