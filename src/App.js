import Square from "./Square";
import ColorInput from "./ColorInput";
import {useState} from 'react';

function App() {
  const [writtenColor, newWrittenColor] = useState("");
  const [hexColor, newHexColor] = useState('');
 

  return (
    <div className="App">
    <Square writtenColor={writtenColor} hexColor={hexColor} />
    <ColorInput writtenColor={writtenColor} newWrittenColor={newWrittenColor} newHexColor={newHexColor}/>
    </div>
  );
}

export default App;
