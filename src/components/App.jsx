import { useCallback, useState } from 'react';
import Card from './card/Card'
import '../styles/App.css';

function App() {

  const [character, setCharacter] = useState('');
  const [charArray, setCharrArray] = useState([]);

  const getCharacters = useCallback( async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`);
    const char = await response.json();
    setCharrArray(char.results);
    setCharacter('');
  }, [charArray]);

  const makeCards = () => {

  }

  return (
    <div className="flex flex-col align-middle">
      { /*charArray.length == 0 ?
      <> 
        <input className='character-input' 
              onChange={ e => setCharacter(e.target.value)} 
              type='text' 
              placeholder='Enter Character Name'
              value={character} />
        <button className='start-btn' onClick={ getCharacters }>
          Start
        </button>
      </>
  : <Card /> */}
      <div className="card-holder">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
