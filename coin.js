import React from "react";
import './coin.css';

const Coin = ({name,image,price,symbol,volume,marketcap,priceChange})=>{
return(
<div className="coin-container">
    <div className="coin-row" >
        <div className="coin">
            <img src= {image} alt="crypto"></img>
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
            <p className="Coin-price">{price}</p>
            <p className="Coin-Volume">${volume.localeString}</p>
            {priceChange<0?<p className="price-change-red"> {priceChange.toFixed(2)}%</p>:
            <p className="price-change-green"> {priceChange.toFixed(2)}%</p> }   
            <p className="market-cap">mktcap: ${marketcap}</p>
                </div>

    </div>

</div>
)
}


export default Coin;