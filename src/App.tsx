import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter';

const App: React.FC = () => {
  const [value, setValue] = useState(5324);
  return (
    <div className="App">
      <Counter 
          value={value} 
          numberOfSymbols={4} />
      <button onClick={() => setValue(Math.round(9999 * Math.random()))}>update</button>
    </div>
  );
}

export default App;
