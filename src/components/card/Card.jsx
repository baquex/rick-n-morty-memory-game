import { useState } from 'react';
import cardbg from '../../images/card-bg.png';


export default function () {

  const [url, setUrl] = useState(cardbg);
  const imgURL = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg';
  
  const flip = (e) => {
    setUrl(imgURL);
  }
  
  return(
    <div className="single-card" onClick={ (e)=> flip(e)}>
      <img className="w-full" src={url} />
    </div>
  )
}