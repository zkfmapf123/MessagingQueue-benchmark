import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TestBox } from './test-box';

function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1> Messaging Queue Benchmark</h1>
        <h3> CurrentValue : {inputValue}</h3>
        <label htmlFor="numberInput">Enter a number:</label>
        <input
          id="numberInput"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
      </header>
      <div>
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </div>
    </div>
  );
}

export default App;
