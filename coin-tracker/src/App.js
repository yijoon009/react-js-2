import { useState, useEffect } from 'react';

function App() {
  //로딩
  const [loading, setLoading] = useState(true);
  //coin 담을 임시 []
  const [coins, setCoins] = useState([]);
  //사용자가 작성할 doller
  const [dollar, setDollar] = useState(1);
  //사용자가 선택한 암호화폐 가격
  const [cost, setCost] = useState(1);
  const onSelectChange = (e) => setCost(e.target.value);

  const onInputChange = (e) => setDollar(e.target.value);

  const getCoins = async () => {
    const json = await (
      await fetch('https://api.coinpaprika.com/v1/tickers')
    ).json();
    setCoins(json);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <select onChange={onSelectChange}>
            <option>Select Coins.</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <br />
          <input
            type="text"
            value={dollar}
            onChange={onInputChange}
            placeholder="Write how many dollars you have"
          ></input>
          <br />
          <h2>You can buy this much : {dollar / cost}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
