import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>What is react? ⚛️</h1>
        <p>
          React is a JavaScript library for building user interfaces. React is
          used to build single-page applications. React allows us to create
          reusable UI components.
        </p>
      </div>
    </>
  );
}

export default App;
