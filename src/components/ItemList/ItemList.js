import Item from "../Item/Item";

const ItemList = ({data = []}) => {
    return (
        data.map(comida => <Item key={comida.id} info={comida} />)
    );
}

export default ItemList;