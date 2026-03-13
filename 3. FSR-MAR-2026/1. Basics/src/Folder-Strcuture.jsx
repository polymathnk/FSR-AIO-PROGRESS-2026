export default function ReactFolderArchitectureTutorial() {
  return (
        <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", lineHeight: "1.6" }}>
    <article className="tutorial">
      <h1>React Folder Architecture</h1>
      <p>
        A clean folder architecture helps keep your React project scalable,
        maintainable, and easy to understand as it grows.
      </p>

      <Section title="Why Folder Architecture Matters">
        <ul>
          <li>Keeps code organized</li>
          <li>Makes components easier to reuse</li>
          <li>Improves collaboration in teams</li>
          <li>Helps scale large applications</li>
        </ul>
      </Section>

      <Section title="Basic React Folder Structure">
        <pre>
{`src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── context/
 ├── services/
 ├── utils/
 ├── assets/
 ├── App.jsx
 └── main.jsx`}
        </pre>
      </Section>

      <Section title="1. Components Folder">
        <p>
          Contains reusable UI components used across different pages.
        </p>

        <pre>
{`src/components/
 ├── Button.jsx
 ├── Navbar.jsx
 └── Card.jsx`}
        </pre>
      </Section>

      <Section title="2. Pages Folder">
        <p>
          Contains page-level components used for routing.
        </p>

        <pre>
{`src/pages/
 ├── Home.jsx
 ├── Login.jsx
 └── Dashboard.jsx`}
        </pre>
      </Section>

      <Section title="3. Hooks Folder">
        <p>
          Custom React hooks are stored here to reuse logic across components.
        </p>

        <pre>
{`src/hooks/
 └── useAuth.js`}
        </pre>
      </Section>

      <Section title="4. Context Folder">
        <p>
          Used for global state management with React Context API.
        </p>

        <pre>
{`src/context/
 └── AuthContext.jsx`}
        </pre>
      </Section>

      <Section title="5. Services Folder">
        <p>
          Handles API calls and external services.
        </p>

        <pre>
{`src/services/
 └── api.js`}
        </pre>
      </Section>

      <Section title="6. Utils Folder">
        <p>
          Utility functions that can be reused across the application.
        </p>

        <pre>
{`src/utils/
 └── formatDate.js`}
        </pre>
      </Section>

      <Section title="7. Assets Folder">
        <p>
          Contains static files such as images, icons, and fonts.
        </p>

        <pre>
{`src/assets/
 ├── images/
 └── icons/`}
        </pre>
      </Section>

      <Section title="Best Practices">
        <ul>
          <li>Keep components small and reusable</li>
          <li>Separate business logic from UI</li>
          <li>Use meaningful folder names</li>
          <li>Group related files together</li>
        </ul>
      </Section>

      <Section title="Conclusion">
        <p>
          A good folder architecture improves code readability and makes
          scaling React applications much easier. As your project grows,
          maintaining a structured folder system becomes essential.
        </p>
      </Section>
    </article>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="tutorial-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}