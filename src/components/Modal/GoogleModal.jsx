import React from 'react';
import ReactDOM from 'react-dom';
import { FiMapPin } from 'react-icons/fi';

const GoogleModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Localização</h2>
          <button className="modal-close" onClick={onClose}>
            Fechar
          </button>
        </div>
        <div className="modal-body">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3849.405682172564!2d-40.275271985151875!3d-15.245656689394236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDE0JzQ0LjQiUyA0MMKwMTYnMjMuMSJX!5e0!3m2!1spt-BR!2sbr!4v1684146734376!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default GoogleModal;
