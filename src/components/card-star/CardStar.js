import React from 'react';
import './CardStar.scss';

export default function CardStar(props) {
  return (
    <>
      <div className="star-container">
        <div className={props.star >= 1 ? 'star-filled' : 'star-empty'}></div>
        <div className={props.star >= 2 ? 'star-filled' : 'star-empty'}></div>
        <div className={props.star >= 3 ? 'star-filled' : 'star-empty'}></div>
        <div className={props.star >= 4 ? 'star-filled' : 'star-empty'}></div>
        <div className={props.star >= 5 ? 'star-filled' : 'star-empty'}></div>
      </div>
    </>
  );
}
