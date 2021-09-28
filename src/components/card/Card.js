import React, { useEffect, useState } from 'react';
import './Card.scss';
import CardStar from '../card-star/CardStar';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import CardModal from '../card-modal/CardModal';

export default function Card(props) {
  const [responseData, setResponseData] = useState([]);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    setResponseData(props.data);
  }, [props.data]);
  const handleDelete = (id) => {
    props.deleteCard(id);
  };
  const handleEdit = (data) => {
    const showModal = { show: true, modalData: data };
    setModalData(showModal);
  };
  const handleStar = (id, star) => {
    const moveId = responseData.findIndex((data) => data.id === id);
    const movie = responseData[moveId];
    movie.star = star;
    props.handleEdit(movie);
  };
  return (
    props.data.length > 0 && (
      <div className="card-container">
        {responseData.map((data) => (
          <div className="card" key={data.id}>
            <div className="card-image">
              <button className="delete" onClick={() => handleDelete(data.id)}>
                <AiFillDelete className="delete-icon" size="2rem" color="red" />
              </button>

              <img
                onClick={() => handleEdit(data)}
                src={data.imageUrl}
                alt={'album'}
              />
              <div className="card-star">
                <CardStar data={data} handleStar={handleStar} />
              </div>
            </div>
            <h2 className="card-title">{data.name}</h2>
          </div>
        ))}
        <CardModal
          style={{ backgroundColor: 'red' }}
          handleDelete={handleDelete}
          modal={modalData}
          alert={props.alert}
        />
      </div>
    )
  );
}
