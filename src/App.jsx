import { useState } from 'react';
import './App.css'; // Add this to include the CSS for the gum animation

function App() {
  const [Active, setActive] = useState(null);

  const Tabs = [
    { name: 'Home', id: 1 },
    { name: 'About', id: 2 },
    { name: 'Profile', id: 3 },
    { name: 'Carry', id: 4 },
    { name: 'Forword', id: 5 },
  ];

  const handleActive = (num) => {
    setActive(num?.id);
  };

  return (
    <div className="tabs-container">
      {Tabs.map((num) => (
        <button
          key={num.id}
          className={`tab-button ${Active === num?.id ? 'active' : ''}`}
          onClick={() => handleActive(num)}
          style={{
            marginRight: Active === num?.id ? '10px' : '0px',
            borderRadius: Active === num?.id ? '5px' : '0px',
            marginLeft: Active === num?.id ? '10px' : '0px',
          }}
        >
          {num.name}
        </button>
      ))}
    </div>
  );
}

export default App;
