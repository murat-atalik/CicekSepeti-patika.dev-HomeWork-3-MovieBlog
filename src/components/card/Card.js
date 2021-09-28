import React, { useEffect, useState } from 'react';
import './Card.scss';
import CardStar from '../card-star/CardStar';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export default function Card(props) {
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    setResponseData(props.data);
  }, [props.data]);

  return (
    props.data.length > 0 && (
      <div className="card-container">
        {responseData.map((data) => (
          <div className="card" key={data.id}>
            <button
              className="delete"
              onClick={() => props.deleteCard(data.id)}
            >
              <AiFillDelete size="2rem" color="red" />
            </button>
            <button className="edit">
              <AiFillEdit size="2rem" color="blue" />
            </button>
            <img className="card-image" src={data.imageUrl} alt={'album'} />
            <h2 className="card-title">{data.name}</h2>
            <div className="card-star">
              <CardStar star={data.star} />
            </div>
          </div>
        ))}
      </div>
    )
  );
}
