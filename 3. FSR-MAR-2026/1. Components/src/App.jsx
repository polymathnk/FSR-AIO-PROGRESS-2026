import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (      
    <>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", lineHeight: "1.6" }}>
        <h1>What are Components in React? ⚛️</h1>
      </div>
    </>
  );
}

export default App;
