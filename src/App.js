import { useState } from 'react';
import Form from './components/Form';
import Box from './components/Box';
import './App.css';

function App() {
  const [colorBox, setColorBox] = useState([]);

  const handleNewColor = (e) => {
    setColorBox([...colorBox, e])
  }
  return (
    <div className="App">
      <Form onNewBox = {handleNewColor}/>
      <Box colorBox= {colorBox}/>
    </div>
  );
}

export default App;
