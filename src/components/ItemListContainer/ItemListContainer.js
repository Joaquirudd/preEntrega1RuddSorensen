import {useEffect, useState} from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

    const comida = [
        { id: 1, title: 'Medialunas', description: 'Masa dulce', price: 0.90, image: "https://travelfoodatlas.com/wp-content/uploads/2021/09/Medialunas.jpg", category: "dulce", },
        { id: 2, title: 'Vigilantes', description: 'Masa dulce con crema pastelera y membrillo', price: 0.95, image: "https://www.cronica.com.ar/__export/1632079855472/sites/cronica/img/2021/09/19/vigilantes2_x1x_crop1632079648037.jpg", category: "dulce", },
        { id: 3, title: 'Sándwich de miga', description: 'Pan de miga con jamon y queso', price: 2.50, image: "https://imag.bonviveur.com/sandwich-de-miga.jpg", category: "salado", },
        { id: 4, title: 'Sándwich de milanesa', description: 'Pan casero con carne de ternera empanada, lechuga, tomate, queso y mayonesa', price: 5.50, image: "https://assets.unileversolutions.com/recipes-v2/210727.jpg", category: "salado", },
    ];

    const ItemListContainer = () => {
        const [data, setData] = useState([]);

        const {comidaId} = useParams();

        useEffect(() => {
            const getData = new Promise(resolve =>{
                setTimeout(() => {
                    resolve(comida);
                }, 1000);
            });

            if(comidaId){
                getData.then(res => setData(res.filter(comida => comida.category === comidaId)));
            } else {
                getData.then(res => setData(res));
            }

        }, [comidaId])

        return <div className = "ItemListContainer" >
            <ItemList data={data}/>
        </div>;
    };

export default ItemListContainer;