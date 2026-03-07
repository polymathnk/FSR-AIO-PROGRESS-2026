import React from "react";

const VirtualDOMPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Understanding Virtual DOM</h1>

      {/* What is DOM */}
      <section style={styles.section}>
        <h2>What is the Real DOM?</h2>
        <p>
          The <b>DOM (Document Object Model)</b> is a tree-like structure created
          by the browser from HTML. Every element like div, p, button, etc.
          becomes a node in the DOM tree.
        </p>

        <p>
          When the DOM changes, the browser must re-render the UI which can be
          slow if many elements update frequently.
        </p>
      </section>

      {/* Virtual DOM */}
      <section style={styles.section}>
        <h2>What is Virtual DOM?</h2>
        <p>
          The <b>Virtual DOM</b> is a lightweight JavaScript representation of
          the Real DOM used by React.
        </p>

        <ul>
          <li>React creates a copy of the real DOM in memory.</li>
          <li>Changes are first made to this virtual DOM.</li>
          <li>React compares the new Virtual DOM with the previous one.</li>
          <li>Only the changed parts are updated in the Real DOM.</li>
        </ul>

        <p>
          This process is called <b>Diffing and Reconciliation</b>.
        </p>
      </section>

      {/* Comparison */}
      <section style={styles.section}>
        <h2>Real DOM vs Virtual DOM</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Real DOM</h3>
            <ul>
              <li>Direct representation of UI</li>
              <li>Updates are slow</li>
              <li>Every change re-renders the UI</li>
              <li>Heavy manipulation</li>
              <li>Used by vanilla JS</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>Virtual DOM</h3>
            <ul>
              <li>Lightweight copy of Real DOM</li>
              <li>Updates are fast</li>
              <li>Only changed nodes update</li>
              <li>Efficient rendering</li>
              <li>Used by React</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Example */}
      <section style={styles.section}>
        <h2>Example Flow</h2>

        <ol>
          <li>User clicks a button</li>
          <li>React updates the Virtual DOM</li>
          <li>React compares old vs new Virtual DOM</li>
          <li>Only changed elements update in the Real DOM</li>
          <li>UI updates efficiently</li>
        </ol>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
  },
  section: {
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    background: "#f9f9f9",
  },
};

export default VirtualDOMPage;