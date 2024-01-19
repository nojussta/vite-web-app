import React, { useState } from 'react';
import ReactLogo from './assets/react.svg';
import ViteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const environment = process.env.ENVIRONMENT || 'dev';
  const version = `v1.${environment}`;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ViteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={ReactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          Additional text for testing purposes
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="version">Version: {version}</p>
    </>
  );
}

export default App;
