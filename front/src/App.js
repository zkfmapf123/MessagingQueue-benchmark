
import { useState } from 'react';
import './App.css';
import { QueueItem } from './item'

function App() {
  const [inputValue, setInputValue] = useState(0)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1 id="title"> Messaging Queue Test Tool  </h1>
        <h2> CurrentValue : {inputValue} </h2>
      </header>
      <div id="input-box">
        <label htmlFor="numberInput">Enter a number:</label>
        <input
          id="numberInput"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div id="queue-box">
        <QueueItem />
        <QueueItem />
        <QueueItem />
        <QueueItem />
      </div>
    </div >
  );
}

export default App;
