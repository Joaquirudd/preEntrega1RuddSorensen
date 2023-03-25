import Counter from "../ItemCount/ItemCount"
import "../ItemDetail/ItemDetail.css"
import {useCartContext} from "../../contexts/CartContext"
import React, { useState } from "react";
import {Link} from "react-router-dom"

export const ItemDetail = ({data}) => {

    const[goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return(
        <div className="container">
            <div className="detail">
                <img className="detailImage" src={data.image} alt="medialunas"/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                    {
                        goToCart
                        ? <Link to="/cart">Terminar Compra</Link>
                        : <Counter initial={1} stock={5} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;