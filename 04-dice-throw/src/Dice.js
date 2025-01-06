import React, {useState} from "react";

export default function Dice(){
    const [result, setResult] = useState(0);

    function roll(){
        let randomNum = Math.floor(Math.random() * 6 + 1);
        setResult(randomNum);
    }

    return(
        <>
            <p id="display">{result}</p>
            <button onClick={()=>roll()}>Roll</button>
        </>
    )
}