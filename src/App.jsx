import React, { useState } from 'react';
import ViteLogo from '/vite.svg';
import './App.css';
import TechStack from './components/TechStack';
import AboutMe from './components/AboutMe';
import FuturePlans from './components/FuturePlans';
import Counter from './components/Counter'; // Import the Counter component

function App() {
  const [count, setCount] = useState(0);
  const version_var = import.meta.env.VITE_PROJECT_VERSION;
  const version = `1.0.${version_var}`; // Preserved versioning

  const [activeTab, setActiveTab] = useState('tech');

  const handleTabClick = (tab, event) => {
    if (event !== null && tab !== null) {
      event.preventDefault();
      setActiveTab(tab);
    } else {
      throw new Error('Invalid event or tab');
    }
  };

  return (
    <div className="app">
      <img src={ViteLogo} className="logo" alt="Vite logo" />
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'tech' ? 'active' : ''}`}
          onClick={(e) => handleTabClick('tech', e)}
        >
          Tech Stack
        </button>
        <button
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={(e) => handleTabClick('about', e)}
        >
          About Me
        </button>
        <button
          className={`tab ${activeTab === 'counter' ? 'active' : ''}`}
          onClick={(e) => handleTabClick('counter', e)}
        >
          Counter
        </button>
        <button
          className={`tab ${activeTab === 'future' ? 'active' : ''}`}
          onClick={(e) => handleTabClick('future', e)}
        >
          Future Plans
        </button>
      </div>
      {activeTab === 'tech' && <TechStack />}
      {activeTab === 'about' && <AboutMe />}
      {activeTab === 'counter' && <Counter count={count} setCount={setCount} />}  {/* Pass props to Counter */}
      {activeTab === 'future' && <FuturePlans />}
      <p className="version">
        <code>{version}</code>  {/* Versioning preserved */}
      </p>
    </div>
  );
}

export default App;
