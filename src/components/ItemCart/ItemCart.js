import { useCartContext } from "../../contexts/CartContext";
import "./ItemCart.css"

const ItemCart = ({ product }) => {

    const {removeProduct} = useCartContext();

    return(
        <div>
            <img src={product.image} alt={product.title} className="detailImage"/>
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: u. {product.price}</p>
                <p>Subtotal: {product.quantity * product.price} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default ItemCart;