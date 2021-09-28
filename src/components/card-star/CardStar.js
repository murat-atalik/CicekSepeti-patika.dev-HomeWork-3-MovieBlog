import React from 'react';
import './CardStar.scss';
import { GiStarFormation } from 'react-icons/gi';

export default function CardStar(props) {
  const handleStar = (star) => {
    props.handleStar(props.data.id, star);
  };
  return (
    <>
      <GiStarFormation
        onClick={() => handleStar(1)}
        className="icon"
        size="2rem"
        color={props.data.star >= 1 ? '#fed34d' : '#120d1b'}
      />
      <GiStarFormation
        onClick={() => handleStar(2)}
        className="icon"
        size="2rem"
        color={props.data.star >= 2 ? '#fed34d' : '#120d1b'}
      />
      <GiStarFormation
        onClick={() => handleStar(3)}
        className="icon"
        size="2rem"
        color={props.data.star >= 3 ? '#fed34d' : '#120d1b'}
      />
      <GiStarFormation
        onClick={() => handleStar(4)}
        className="icon"
        size="2rem"
        color={props.data.star >= 4 ? '#fed34d' : '#120d1b'}
      />
      <GiStarFormation
        onClick={() => handleStar(5)}
        className="icon"
        size="2rem"
        color={props.data.star >= 5 ? '#fed34d' : '#120d1b'}
      />
    </>
  );
}
