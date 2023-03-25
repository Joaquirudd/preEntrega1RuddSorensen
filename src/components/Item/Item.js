import { Link } from "react-router-dom";
import {useContext} from "react";
import { CartContext } from "../../contexts/CartContext";


const ItemDetail = ({info}) => {

    const nombre = useContext(CartContext);
    console.log("Item: ", nombre)

    return(
        <Link to={`/detalle/${info.id}`}>
            <img src={info.image} alt="" className="detailImage"/>
            <p>{info.title}</p>
        </Link>
    );
}

export default ItemDetail;