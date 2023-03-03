import { useState } from 'react';
import bird from '../assets/bird.svg';
import cat from '../assets/cat.svg';
import cow from '../assets/cow.svg';
import dog from '../assets/dog.svg';
import gator from '../assets/gator.svg';
import heart from '../assets/heart.svg';
import horse from '../assets/horse.svg';
import './AnimalShow.css';

const svgMap = {
  bird: bird as string,
  cat: cat as string,
  cow: cow as string,
  dog: dog as string,
  gator: gator as string,
  horse: horse as string,
};

function AnimalShow({ type }: { type: string }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type as keyof typeof svgMap]} />
      {/* <img alt="animal" src={svgMap[type as keyof ObjName]} /> */}

      <img className="heart" alt="heart" src={heart} style={{ width: 10 + 10 * clicks + 'px' }} />
    </div>
  );
}

export default AnimalShow;
