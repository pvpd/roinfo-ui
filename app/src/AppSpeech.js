import React, {useRef} from 'react';

import './App.css';

function App() {
  const voiceRef = useRef(null)
  const textRef = useRef(null)

  const onClick = () => {
    const body = { 
      voice: voiceRef.current.value,
      text: textRef.current.value,
    };

    fetch("http://10.0.0.144:3000/voice", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        Voice: <select ref={voiceRef}>
          <option value="Amelie">Amelie</option>
          <option value="Karen">Karen</option>
          <option value="Alex">Alex</option>
          <option value="Daniel">Daniel</option>
          <option value="Samantha">Samantha</option>
          <option value="Rishi">Rishi</option>
          <option value="Thomas">Thomas</option>
        </select>
        <br />
        Text: <input ref={textRef} />
        <br />
        <button onClick={onClick}>Speech</button>
      </header>
    </div>
  );
}

export default App;