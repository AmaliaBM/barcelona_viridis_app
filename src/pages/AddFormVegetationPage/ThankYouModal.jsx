
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ThankYouModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thank you!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Thank you for sharing the vegetation you appreciate in Barcelona!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThankYouModal;
