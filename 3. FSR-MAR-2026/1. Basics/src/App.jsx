import { useState } from "react";
import RenderingArticle from "./Rendering";
import SpaVsMpa from "./SPA-vs-MPA";
import VirtualDOMPage from "./DOM";
import SetupReact from "./CRA-vs-VIte";
import JSXTutorial from "./JSX-and-Structure";
import BabelTranspilation from "./Babel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", lineHeight: "1.6" }}>
        <h1>What is react? ⚛️</h1>
        <p>
          React is a JavaScript library for building user interfaces. React is
          used to build single-page applications. React allows us to create
          reusable UI components.
        </p>
      </div>
      <RenderingArticle />
      <SpaVsMpa />
      <VirtualDOMPage />
      <SetupReact />
      <JSXTutorial />
      <BabelTranspilation />
    </>
  );
}

export default App;
