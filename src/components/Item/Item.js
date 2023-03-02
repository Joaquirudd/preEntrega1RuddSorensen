import { Link } from "react-router-dom";

export const ItemDetail = ({info}) => {
    return(
        <Link to={`/detalle/${info.id}`}>
            <img src={info.image} alt="" className="detailImage"/>
            <p>{info.title}</p>
        </Link>
    );
}

export default ItemDetail;