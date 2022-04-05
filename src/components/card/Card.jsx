import { useState } from 'react';
import cardbg from '../../images/card-bg.png';

export default function Card ({imgSrc, imgId}) {

  const [url, setUrl] = useState(cardbg);
  const imgURL = imgSrc;
  
  const flip = () => {
    setUrl(imgURL);
  }
  
  return(
    <div className="single-card" onClick={ ()=> flip()}>
      <img className="w-full" src={url} alt="cardimg" />
    </div>
  )
}