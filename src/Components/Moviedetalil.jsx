import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const Moviedetalil = (props) => {
    
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >


            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.data.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Overview</h4>
                <p>
                    {props.data.overview}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>

    )
}

export default Moviedetalil
