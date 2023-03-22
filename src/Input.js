import { useState } from 'react';

function Input({ onSubmit, max }) {
  const [text, setText] = useState('');
  const [n, setN] = useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    onSubmit(text, n);
    setText('');
  };
  
  return <form onSubmit={handleSubmit}>
    <div>
        <label>Color</label>
        <input value={text} onChange={e => setText(e.target.value)} />
    </div>
    <div>
        <label>Insert At Index</label>
        <input type="number" min={0} max={max} value={n} onChange={e => setN(parseInt(e.target.value))} />
    </div>
    <button>Submit</button>
  </form>
}

export { Input };
