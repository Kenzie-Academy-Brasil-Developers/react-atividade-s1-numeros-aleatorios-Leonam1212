import { useState } from "react"
import React from "react"
import "./style.css"

const RandomNumbers = () => {

const [number, setNumber] = useState(Math.floor(Math.random () * 100) + 0);

return (

    <div>
        <p>{number}</p>
        <button onClick ={() => setNumber(Math.floor(Math.random () * 100) + 0)}>Clique aqui</button>
    </div>
    
    )
}

export default RandomNumbers;