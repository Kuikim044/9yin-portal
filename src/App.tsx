import React, { useState } from 'react';
import './Theme.css';
import { wikiData, type WikiSection } from './data/wikiData';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const currentData = wikiData[activeSection];

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>9Yin Wiki Portal</h1>
        </div>
        <ul className="nav-list">
          {Object.values(wikiData).map((section) => (
            <li
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="content-header">
          <h2>{currentData.title}</h2>
        </header>
        
        <div className="content-body">
          <p>{currentData.content}</p>

          {currentData.tables && currentData.tables.map((table, idx) => (
            <div key={idx} className="data-table-container">
              <table>
                <thead>
                  <tr>
                    {table.header.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
