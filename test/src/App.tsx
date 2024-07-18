import { useState } from 'react';
import './App.less';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="root">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
