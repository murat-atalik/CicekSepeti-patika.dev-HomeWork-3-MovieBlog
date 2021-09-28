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

  return (
    props.data.length > 0 && (
      <div className="card-container">
        {responseData.map((data) => (
          <div className="card" key={data.id}>
            <button className="delete" onClick={() => handleDelete(data.id)}>
              <AiFillDelete size="2rem" color="red" />
            </button>
            <button className="edit" onClick={() => handleEdit(data)}>
              <AiFillEdit size="2rem" color="blue" />
            </button>
            <img className="card-image" src={data.imageUrl} alt={'album'} />
            <h2 className="card-title">{data.name}</h2>
            <div className="card-star">
              <CardStar star={data.star} />
            </div>
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
