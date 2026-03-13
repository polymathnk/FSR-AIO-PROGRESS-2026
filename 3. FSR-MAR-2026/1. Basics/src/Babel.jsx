import React from "react";

function BabelTranspilation() {
  return (
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", lineHeight: "1.6" }}>
      <h1>Babel & Transpilation in React</h1>

      <p>
        Modern JavaScript features and JSX syntax are not directly understood
        by browsers. To make this code compatible with browsers, developers use
        a tool called <strong>Babel</strong>.
      </p>

      <h2>What is Babel?</h2>
      <p>
        Babel is a JavaScript compiler that converts modern JavaScript (ES6+)
        and JSX into plain JavaScript that browsers can understand.
      </p>

      <h2>What is Transpilation?</h2>
      <p>
        Transpilation is the process of converting modern JavaScript or JSX
        syntax into older JavaScript syntax so it can run in all browsers.
      </p>

      <h2>Example</h2>

      <h3>JSX Code</h3>
      <pre>
{`const element = <h1>Hello World</h1>;`}
      </pre>

      <h3>After Babel Transpilation</h3>
      <pre>
{`const element = React.createElement(
  "h1",
  null,
  "Hello World"
);`}
      </pre>

      <p>
        Babel converts JSX into a <code>React.createElement</code> call that the
        browser can execute.
      </p>

      <h2>Why Babel is Important</h2>
      <ul>
        <li>Allows developers to write modern JavaScript</li>
        <li>Converts JSX into standard JavaScript</li>
        <li>Ensures compatibility with older browsers</li>
        <li>Used by tools like Vite, Webpack, and Create React App</li>
      </ul>
    </div>
  );
}

export default BabelTranspilation;