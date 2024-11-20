import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <div>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
