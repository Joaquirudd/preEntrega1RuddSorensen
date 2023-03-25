import {useEffect, useState} from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

    

    const ItemListContainer = () => {
        const [data, setData] = useState([]);

        const {comidaId} = useParams();

        useEffect(() => {
            const querydb = getFirestore();
            const queryCollection = collection(querydb, "items");
            
            
            if(comidaId){
                const queryFilter = query(queryCollection, where("category", "==", comidaId))
                getDocs(queryFilter)
                    .then(res => setData(res.docs.map(item => ({id: item.id, ...item.data() }))))
            } else {
                getDocs(queryCollection)
                    .then(res => setData(res.docs.map(item => ({id: item.id, ...item.data() }))))
            }
            
        }, [comidaId])

        return <div className = "ItemListContainer" >
            <ItemList data={data}/>
        </div>;
    };

export default ItemListContainer;