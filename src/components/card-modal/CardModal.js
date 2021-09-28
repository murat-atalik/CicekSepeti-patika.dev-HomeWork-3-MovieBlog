import React, { useState, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import ReactModal from 'react-modal';
import CardStar from '../card-star/CardStar';
import './CardModal.scss';

export default function CardModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    setShowModal(props.modal?.show);
    setModalData(props.modal?.modalData);
  }, [props.modal]);
  const handleCloseModal = () => {
    setShowModal(false);
    props.alert('EDIT CANCELLED');
  };
  return (
    <div>
      <ReactModal
        className="modal"
        ariaHideApp={false}
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
      >
        <div className="modal-inner">
          <button onClick={handleCloseModal}>
            <AiFillCloseCircle size="1.5rem" color="#fed34d" />
          </button>
          <iframe
            width="50%"
            height="50%"
            src={modalData?.teaser}
            title={modalData?.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="modal-body">
            <div className="modal-name">{modalData?.name}</div>
            <div className="modal-director">
              Director: {modalData?.director}
            </div>
            <div className="modal-popularity">
              <h2>Popularity:</h2>
              <CardStar star={modalData?.star} />
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
