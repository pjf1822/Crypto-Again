import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Coin from './Coin';

function App() {

  const [coins, setCoins] = useState([]);


  useEffect(() =>{
   

    const fetchCoins = async () =>{
      const result = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false`
        )

        setCoins(result.data)
    }

    fetchCoins()
    
  }, [])

  

  return (
    <div className="App">
      <h1>Top Crypto Tracker</h1>
      <Coin coins={coins}/>
    </div>
  );
}

export default App;
