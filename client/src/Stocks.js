import axios from "axios";
import React, { useState } from "react";



const Stocks = () => {

    const [stock, setStock] = useState('')

    const handleSubmit2 = (e) => {
        e.preventDefault()
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
        .then(res => console.log(res.data))
    }

    return (
    <div>
    <form onSubmit={handleSubmit2}>
        <label>Symbol</label>
        <input type="text" onChange={(e)=>{setStock(e.target.value)}}></input>
        <button type="submit" className="signupbutton">Click me</button>
    </form>
    </div>
    )
}

export default Stocks;