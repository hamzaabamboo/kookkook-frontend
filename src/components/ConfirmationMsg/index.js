import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.title}</p>
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column">
                <Button onClick={props.onAction}>{props.actionText}</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
