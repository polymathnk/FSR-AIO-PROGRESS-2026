
const SetupReact = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", lineHeight: "1.6" }}>
      <h1>Setting Up React (Vite / Create React App)</h1>

      <p>
        React is a popular JavaScript library for building user interfaces.
        Before you start building React apps, you need to set up a React project.
        The two most common ways are:
      </p>

      <ul>
        <li>Using <strong>Vite</strong> (recommended and modern)</li>
        <li>Using <strong>Create React App (CRA)</strong></li>
      </ul>

      <hr />

      <h2>1. Prerequisites</h2>
      <p>Before setting up React, make sure you have the following installed:</p>

      <ul>
        <li>Node.js (version 16 or later)</li>
        <li>npm or yarn package manager</li>
        <li>A code editor (VS Code recommended)</li>
      </ul>

      <p>Check your installation with:</p>

      <pre>
{`node -v
npm -v`}
      </pre>

      <hr />

      <h2>2. Setting Up React with Vite (Recommended)</h2>

      <p>
        <strong>Vite</strong> is a modern build tool that is faster and lighter
        than Create React App.
      </p>

      <h3>Step 1: Create a Project</h3>

      <pre>
{`npm create vite@latest my-react-app`}
      </pre>

      <h3>Step 2: Select Options</h3>

      <p>When prompted:</p>

      <ul>
        <li>Select <strong>React</strong></li>
        <li>Choose <strong>JavaScript</strong> or <strong>TypeScript</strong></li>
      </ul>

      <h3>Step 3: Install Dependencies</h3>

      <pre>
{`cd my-react-app
npm install`}
      </pre>

      <h3>Step 4: Start Development Server</h3>

      <pre>
{`npm run dev`}
      </pre>

      <p>
        Your React app will run at something like:
      </p>

      <pre>
{`http://localhost:5173`}
      </pre>

      <hr />

      <h2>3. Setting Up React with Create React App (CRA)</h2>

      <p>
        Create React App was the traditional way to start React projects,
        but it is now less recommended compared to Vite.
      </p>

      <h3>Step 1: Create a Project</h3>

      <pre>
{`npx create-react-app my-react-app`}
      </pre>

      <h3>Step 2: Move into the Project Folder</h3>

      <pre>
{`cd my-react-app`}
      </pre>

      <h3>Step 3: Start the App</h3>

      <pre>
{`npm start`}
      </pre>

      <p>Your app will run at:</p>

      <pre>
{`http://localhost:3000`}
      </pre>

      <hr />

      <h2>4. Project Folder Structure (Vite)</h2>

      <pre>
{`my-react-app
 ├─ node_modules
 ├─ public
 ├─ src
 │   ├─ App.jsx
 │   ├─ main.jsx
 │   └─ assets
 ├─ index.html
 ├─ package.json
 └─ vite.config.js`}
      </pre>

      <p>
        The most important files are:
      </p>

      <ul>
        <li><strong>main.jsx</strong> – Entry point of the React app</li>
        <li><strong>App.jsx</strong> – Main component</li>
        <li><strong>index.html</strong> – Root HTML file</li>
      </ul>

      <hr />

      <h2>5. Example React Component</h2>

      <pre>
{`function App() {
  return (
    <div>
      <h1>Hello React 🚀</h1>
      <p>Your React app is running!</p>
    </div>
  );
}

export default App;`}
      </pre>

      <hr />

      <h2>Summary</h2>

      <ul>
        <li>Install Node.js and npm</li>
        <li>Use <strong>Vite</strong> for faster modern React setup</li>
        <li>CRA is older but still works</li>
        <li>Run the development server to start building</li>
      </ul>
    </div>
  );
};

export default SetupReact;