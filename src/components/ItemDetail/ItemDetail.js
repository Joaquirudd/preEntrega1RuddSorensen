import Counter from "../ItemCount/ItemCount"
import "../ItemDetail/ItemDetail.css"

export const ItemDetail = ({data}) => {

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }

    return(
        <div className="container">
            <div className="detail">
                <img className="detailImage" src={data.image} alt="medialunas"/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                    <Counter initial={1} stock={5} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;