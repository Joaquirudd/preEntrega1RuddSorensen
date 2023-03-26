
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext"
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {

    const { cart, totalPrice } = useCartContext();
    const [form, setForm] = useState({items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: totalPrice(),})
/*
    const order = {
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }
*/
    const submitHandler = (ev) => {
        ev.preventDefault();

        const db = getFirestore();
        const contactFormCollection = collection(db, "contactForm");
        addDoc(contactFormCollection, form).then(({ snapshot }) => console.log(snapshot))
    }
/*
    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
        .then(({ id }) => console.log(id))
    }
*/
    const changeHandler = (ev) => {
        const {name, value} = ev.target;
        setForm({...form, [name]: value});
    };

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
            <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                name="name"
                id="name"
                value={form.name}
                onChange={changeHandler} 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={changeHandler} 
                />
            </div>
            <button onClick={submitHandler}>Terminar la compra</button>
        </form>
        
        </>
    )
};



export default Cart;