import { useState } from 'react';
import '../styles/App.css';

function App() {

  const [character, setCharacter] = useState('');

  const getCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`);
    const char = await response.json();
    console.log(char.results);
    setCharacter('');
  }

  return (
    <div className="flex flex-col align-middle">
      <input className='character-input' 
            onChange={ e => setCharacter(e.target.value)} 
            type='text' 
            placeholder='Enter Character Name'
            value={character} />
      <button className='start-btn' onClick={ getCharacters }>
        Start
      </button>
    </div>
  );
}

export default App;
