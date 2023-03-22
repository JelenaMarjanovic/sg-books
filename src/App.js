import { useState } from 'react';
import { Input } from './Input';

function App() {
  const [colors, setColors] = useState([]);
  
  const addColor = (newColor) => {
    // Todo: Add 'newColor' to the --end-- of 'colors'
    // and update state
    const updatedColors = [
      ...colors,
      newColor
    ];

    setColors(updatedColors);
  };
  
  const renderedColors = colors.map((color, i) => {
      return <li key={i}>{color}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>
        {renderedColors}
      </ul>
    </div>
  );
}

export default App;
