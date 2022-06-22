import axios from "axios";
import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import Cookies from 'js-cookie';



const Stocks = () => {

    const [stock, setStock] = useState('')
    const [stockArr, setStockArr] = useState(['0'])
    const [dataArr, setDataArr] = useState(['0'])
    const [effect, setEffect] = useState([])
    const [change, setChange] = useState([])

    let graphData = {
        labels: ['09:35','09:40','09:45','09:50','09:55','10:00','10:05','10:10','10:15','10:20','10:25','10:30','10:35','10:40','10:45','10:50','10:55','11:00','11:05','11:10','11:15','11:20','11:25','11:30','11:35','11:40','11:45','11:50','11:55','12:00','12:05','12:10','12:15','12:20','12:25','12:30','12:35','12:40','12:45','12:50','12:55','13:00','13:05','13:10','13:15','13:20','13:25','13:30','13:35','13:40','13:45','13:50','13:55','14:00','14:05','14:10','14:15','14:20','14:25','14:30','14:35','14:40','14:45','14:50','14:55','15:00','15:05','15:10','15:15','15:20','15:25','15:30','15:35','15:40','15:45','15:50','15:55','16:00','NA'],
        datasets: [{
            label: "Current Price/Share",
            data: change
        }] 
    }
    // const [stockData, setStockData] = useState({
    //     labels: [],
    //     datasets: []
    // })
    const cookieUser = Cookies.get('username')

    useEffect(() => {
        axios.post('http://localhost:3000/ticker', { cookieUser })
        .then(res => setEffect(res.data.stockNames))
    })


    const handleSubmit2 = (e) => {
        e.preventDefault()
        setStockArr((old) => [...old, stock])
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&apikey=498183`)
        .then(res => {
            console.log(stockArr)
            let array = []
            for (let property in res.data['Time Series (5min)']) {
                array.push(res.data['Time Series (5min)'][property]['1. open'])
            }
            console.log(array)
            setDataArr((old)=>[...old, array])
            console.log(dataArr)
            let stockInformation = { stock: stockArr, data: dataArr }
            axios.post('http://localhost:3000/stocks', stockInformation)
            .then(res => console.log(res))
        })
    }

    const dataChange = (e) => {
        
        axios.post('http://localhost:3000/ticker', { cookieUser })
        .then(async res => {
            let sam = await setChange(res.data.stockData[e.target.value])
            console.log(change)
        })
        console.log(change)
    }

    return (
    <div>
    <form onSubmit={handleSubmit2}>
        <label>Symbol</label>
        <input type="text" onChange={(e)=>{setStock(e.target.value)}}></input>
        <button type="submit" className="signupbutton">Click me</button>
        <select onChange={dataChange}>
            <option value="0">--Select Ticker--</option>
            {
                effect.map((markets, index) => <option value={index} key={index}>{markets}</option>)
            }
        </select>
    </form>
    <LineChart chartData={graphData} />
    </div>
    )
}

export default Stocks;