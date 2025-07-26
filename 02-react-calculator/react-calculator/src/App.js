import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleSum = () => setResult(Number(num1) + Number(num2));
  const handleSub = () => setResult(Number(num1) - Number(num2));
  const handleMul = () => setResult(Number(num1) * Number(num2));
  const handleDiv = () => setResult(Number(num1) / Number(num2));

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="First Number"/>
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Second Number"/>
      <div>
        <button onClick={handleSum}>Add</button>
        <button onClick={handleSub}>Subtract</button>
        <button onClick={handleMul}>Multiply</button>
        <button onClick={handleDiv}>Divide</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
