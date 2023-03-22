import { useState } from 'react';
import { Input } from './Input';

function App() {
  const [colors, setColors] = useState([]);
  
  const addColorAtIndex = (newColor, index) => {
    // Todo: Add 'newColor' to the --end-- of 'colors'
    // and update state
    const updatedColors = [
      ...colors.slice(0, index),
      newColor,
      ...colors.slice(index)
    ];

    setColors(updatedColors);
  };
  
  const renderedColors = colors.map((color, i) => {
      return <li key={i}>{color}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addColorAtIndex} />
      <ul>
        {renderedColors}
      </ul>
    </div>
  );
}

export default App;
