import './App.css';
import { useState, useCallback } from "react";
import axios from 'axios';
import { host, port } from './runtimeVariables';

function App() {
  const [isSending, setIsSending] = useState(false)

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    axios
      .get(`http://${host}:${port}/ping`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  
    setIsSending(false)
  }, [isSending])

  return (
    <div className="App">
      <header className="App-header">
        <input type="button" disabled={isSending} onClick={sendRequest} value="Notify" />
      </header>
    </div>
  );
}

export default App;
