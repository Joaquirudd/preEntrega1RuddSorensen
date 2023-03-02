import React,{useEffect , useState} from "react";

const Counter = ({initial, stock, onAdd}) => {
    const [count, SetCount] = useState(parseInt(initial));

    const decrese = () => {
        SetCount(count - 1);
    }

    const increse = () => {
        SetCount(count + 1);
    }

    useEffect(() => {
        SetCount (parseInt(initial));
    }, [initial])

    return (
        <div>
            <button disabled={count <=1} onClick={decrese}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increse}>+</button>
            <div>
                <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Counter;