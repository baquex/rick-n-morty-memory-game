import { useCallback, useState } from 'react';
import Card from './card/Card'
import '../styles/App.css';

function App() {

  const [character, setCharacter] = useState('');
  const [charArray, setCharrArray] = useState([]);

  //makes API call to get the character based on user input
  const getCharacters = useCallback( async (character) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`);
    const char = await response.json();
    let apiImgs = [];

    //adds images to image array
    for (let i = 0; i < 6; i++){
      apiImgs.push(char.results[i].image)
    }

    //takes the image array to make the cards for the game
    let cardComponentArray = makeCards(apiImgs);

    setCharrArray(cardComponentArray);
    setCharacter('');
  }, []);

  //receives an array and makes all cards
  const makeCards = (apiImg) => {
    let cardArray = [];
    let imgArray = [];
    let imgIdx = 0;

    for (let i = 0; i < 12; i+=2){
     imgArray[i] = {'src': apiImg[imgIdx], 'id': imgIdx};
     imgArray[i+1] = {'src': apiImg[imgIdx], 'id': imgIdx};
     imgIdx++;
    }

    //takes the 12 card array and shuffles them
    shuffleArray(imgArray);

    //maps the card image to each card
    imgArray.map( (img, idx)=>{
      cardArray.push(<Card key={idx} imgSrc={img.src} imgId={img.id} />)
    } );

    return cardArray;
  }

  //generic shuffliing function
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

  return (
    <div className="flex flex-col align-middle">
      { charArray.length === 0 ?
      <> 
        <input className='character-input' 
              onChange={ e => setCharacter(e.target.value)} 
              type='text' 
              placeholder='Enter Character Name'
              value={character} />
        <button className='start-btn' onClick={ () => getCharacters(character) }>
          Start
        </button>
      </>
  : 
      <div className="card-holder">
        { charArray }
      </div>
    }
    </div>
  );
}

export default App;
