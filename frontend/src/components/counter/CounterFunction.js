import React,{useState} from "react";

function CounterFunction(){
    let [number, setNumber] = useState(0)

    function increment(){
        setNumber(++number)
    }

    return(
        <div>
            <h3>This is function based component</h3>
            <h1>counter = {number}</h1>
            <button onClick={e => increment()}>increment</button>
        </div>
    )

}
export default CounterFunction
