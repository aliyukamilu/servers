import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  const [pingmess, setPingmess] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
      });


    fetch("/pingMes")
      .then((res) => res.json())
      .then((data) => {
        setPingmess(data.message)
      });
  }, []);

  // function pingAPi() {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{!data ? "Loading..." : data}</p>
        <p>{!pingmess ? "Loading ping Response..." : pingmess}</p>
        {/* <button onClick={pingAPi}>Ping Api</button> */}
      </header>
    </div>
  );
}

export default App;
