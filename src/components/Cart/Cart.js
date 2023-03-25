
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext"
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name:"Joaquina",
            email: "joaquinarudds00@gmail.com",
            phone: "665037615",
            address: "address"
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
        .then(({ id }) => console.log(id))
    }

    if(cart.length === 0){
        return(
            <>
            <p>No hay elementos aquí</p>
            <Link to="/"> Realiza tu compra </Link>
            </>
        )
    };

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Realizar Compra</button>
        </>
    )
};



export default Cart;