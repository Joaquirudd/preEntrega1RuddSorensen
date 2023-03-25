import { useCartContext } from "../../contexts/CartContext";

export const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <>
            <i className="bi bi-cart"></i>

            <span>{totalProducts() || ""} </span>
        </> 
    )
} 

export default CartWidget;