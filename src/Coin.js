import CoinAgain from "./CoinAgain"

import './Coin.css'


const Coin = ({coins}) => {

    console.log(coins)
    return (
        <section>
            <div className="coin-grid">

            
            {coins.map(coin =>{
                return(
                    <div className="card-wrapper">
                        <div className="front">

                                <h1>
                                    {coin.name}
                                </h1>
                                <img src={coin.image} alt=""/>
                                <p>
                                    ${coin.current_price}
                                </p>
                        </div>
                        <div className="back">
                            <h3>24 Hour High: {coin.high_24h}</h3>
                            <h3>24 Hour Low: {coin.low_24h}</h3>
                            <h3 >24 Hour Change  <br/><span className={coin.price_change_percentage_24h < 0 ? "red-text" : "green-text"}>{coin.price_change_percentage_24h} %</span>   </h3>
                           
                        </div>
                    </div>
                )

            })}
            </div>
        </section>
    )
}

export default Coin
