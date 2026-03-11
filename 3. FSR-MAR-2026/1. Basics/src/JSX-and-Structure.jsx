import React from "react";

function JSXTutorial() {
  return (
       <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", lineHeight: "1.6" }}>

      <h1>Project Structure</h1>
      <p>A typical React project structure looks like this:</p>

      <pre>
{`
my-react-app
│
├── public
│   └── index.html
│
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── components
│   │   └── Header.jsx
│
└── package.json
`}
      </pre>

      <ul>
        <li><b>public</b> → Contains index.html</li>
        <li><b>src</b> → Contains React source code</li>
        <li><b>App.jsx</b> → Main component</li>
        <li><b>components</b> → Reusable components</li>
      </ul>

      <hr />

      <h1>JSX Basics</h1>
      <p>
        JSX stands for <b>JavaScript XML</b>. It allows writing HTML inside
        JavaScript.
      </p>

      <h3>Example</h3>

      <pre>
{`
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>This is JSX</p>
    </div>
  );
}
`}
      </pre>

      <p>JSX makes UI easier to write and understand.</p>

      <hr />

      <h1>JSX Rules</h1>

      <h3>1. Only One Parent Element</h3>

      <pre>
{`
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
`}
      </pre>

      <h3>2. Use className Instead of class</h3>

      <pre>
{`
<h1 className="title">Hello</h1>
`}
      </pre>

      <h3>3. All Tags Must Be Closed</h3>

      <pre>
{`
<img src="image.png" />
`}
      </pre>

      <h3>4. JavaScript Inside Curly Braces</h3>

      <pre>
{`
const name = "Nitin";

<h1>Hello {name}</h1>
`}
      </pre>

      <hr />

      <h1>Conclusion</h1>
      <p>
        JSX helps developers build UI easily using HTML-like syntax inside
        JavaScript.
      </p>

    </div>
  );
}

export default JSXTutorial;