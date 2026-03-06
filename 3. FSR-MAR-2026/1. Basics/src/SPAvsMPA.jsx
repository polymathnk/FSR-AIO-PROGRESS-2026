import React from "react";

const SpaVsMpa = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", lineHeight: "1.6" }}>
      
      <h1>SPA vs MPA in React</h1>
      <p>
        In the React ecosystem, SPA (Single Page Application) and MPA (Multi Page Application)
        refer to how your application loads pages and handles navigation.
      </p>

      <h2>1. SPA (Single Page Application)</h2>
      <p>
        A Single Page Application loads a single HTML page and dynamically updates
        the content using JavaScript without reloading the page.
      </p>

      <h3>How it works</h3>
      <ul>
        <li>The browser loads one HTML file.</li>
        <li>React updates the UI dynamically.</li>
        <li>Navigation is handled by React Router.</li>
        <li>No full page reload happens.</li>
      </ul>

      <h3>Example</h3>
      <pre>
{`import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
      </pre>

      <h3>Flow</h3>
      <pre>
{`User clicks link
      ↓
React Router intercepts
      ↓
Component changes
      ↓
Page does NOT reload`}
      </pre>

      <h3>Pros</h3>
      <ul>
        <li>Very fast navigation</li>
        <li>Better user experience</li>
        <li>Fewer server requests</li>
        <li>Feels like a mobile app</li>
      </ul>

      <h3>Cons</h3>
      <ul>
        <li>SEO can be harder</li>
        <li>Large initial bundle size</li>
        <li>First load may be slower</li>
      </ul>

      <hr />

      <h2>2. MPA (Multi Page Application)</h2>
      <p>
        A Multi Page Application loads a new HTML page from the server for every route.
      </p>

      <h3>How it works</h3>
      <pre>
{`User clicks link
      ↓
Browser requests new HTML page
      ↓
Server sends new page
      ↓
Browser reloads`}
      </pre>

      <h3>Example Structure</h3>
      <pre>
{`/home.html
/about.html
/contact.html`}
      </pre>

      <h3>Pros</h3>
      <ul>
        <li>Better SEO by default</li>
        <li>Faster initial page load</li>
        <li>Simpler architecture for small websites</li>
      </ul>

      <h3>Cons</h3>
      <ul>
        <li>Page reload on navigation</li>
        <li>Slower user experience</li>
        <li>More server requests</li>
      </ul>

      <hr />

      <h2>3. SPA vs MPA Comparison</h2>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Feature</th>
            <th>SPA</th>
            <th>MPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Page Reload</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Speed After Load</td>
            <td>Very Fast</td>
            <td>Slower</td>
          </tr>
          <tr>
            <td>SEO</td>
            <td>Needs SSR</td>
            <td>Good by default</td>
          </tr>
          <tr>
            <td>User Experience</td>
            <td>App-like</td>
            <td>Traditional</td>
          </tr>
          <tr>
            <td>Routing</td>
            <td>Client-side</td>
            <td>Server-side</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>4. What React Apps Usually Use</h2>
      <p>
        Most React applications are built as SPAs, especially dashboards,
        SaaS applications, admin panels, and interactive web apps.
      </p>

      <ul>
        <li>Dashboards</li>
        <li>SaaS apps</li>
        <li>Admin panels</li>
        <li>Interactive web apps</li>
      </ul>

      <p>
        Frameworks like Next.js can support SPA, MPA, SSR (Server Side Rendering),
        and SSG (Static Site Generation).
      </p>

    </div>
  );
};

export default SpaVsMpa;