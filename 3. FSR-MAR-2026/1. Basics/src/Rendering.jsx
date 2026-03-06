function RenderingArticle() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", lineHeight: "1.6" }}>
      <h1>Understanding Rendering in React</h1>

      <p>
        When building applications with React, one of the most important concepts
        to understand is rendering. Rendering is the process through which React
        displays your user interface on the screen. In simple terms, rendering
        means taking the code written in JSX and turning it into visible elements
        in the browser.
      </p>

      <h1>What Does Rendering Mean?</h1>

      <p>
        In React, components describe what the UI should look like. Each component
        returns JSX, which looks similar to HTML. When React renders a component,
        it converts that JSX into actual DOM elements that the browser can display.
      </p>

      <p>For example:</p>

      <pre>
{`function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This page is rendered using React.</p>
    </div>
  );
}`}
      </pre>

      <p>
        When React renders this component, the browser will show a heading and a
        paragraph on the page. React takes the JSX structure and updates the
        browser’s DOM accordingly.
      </p>

      <h1>Initial Rendering</h1>

      <p>
        The first time a React application loads, React performs what is called
        initial rendering. This happens when the root component of the application
        is rendered into the main HTML element.
      </p>

      <p>Example:</p>

      <pre>
{`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);`}
      </pre>

      <p>
        Here, React renders the App component inside the root element of the HTML
        file. This is the moment when the application UI first appears on the
        screen.
      </p>

      <h1>Re-rendering in React</h1>

      <p>
        React applications are dynamic, meaning the UI changes when data changes.
        When the data inside a component changes such as state or props React
        automatically renders the component again. This process is called
        re-rendering.
      </p>

      <p>Consider a simple counter component:</p>

      <pre>
{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}`}
      </pre>

      <p>
        When the button is clicked, the state value updates. React then
        re-renders the component and updates the number shown on the screen.
      </p>
    </div>
  );
}

export default RenderingArticle;