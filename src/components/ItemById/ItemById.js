import { useEffect, getFirestorage, doc, getDoc} from "react";

const ItemById = ({ id }) => {

    useEffect (() => {
        const db = getFirestorage();
        const ItemRef = doc (db, "items", id);
        getDoc(ItemRef).then(snapshot => console.log(snapshot));
    },[id]);

    return <div> {id} </div>;
};

export default ItemById;