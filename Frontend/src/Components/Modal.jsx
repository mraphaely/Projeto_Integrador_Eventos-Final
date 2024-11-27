import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import '../Styles/Modal.css'

function ModalBtn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className='Container'>
      <Button variant="primary" onClick={handleShow} className='BtnSelecionarEventos'>
      INSCREVA-SE
      </Button>

     
      <Modal show={show} onHide={handleClose} className='Modal'>
        <Modal.Header className='modalHeader'>
          <Modal.Title className='titleModal'>INSCRIÇÃO</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='labelModal'>Email do Participante:</Form.Label>
              <Form.Control
              className='inputModal' 
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className='labelModal' >Quantidade de Ingressos:</Form.Label>
              <Form.Control  className='inputModal'   type="number" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <button onClick={handleClose} className='btnModalFecha'>
          FECHAR
          </button>
          <Button variant="primary" onClick={handleClose} className='btnModal'>
          CONCLUIR
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    
  );
}

export default ModalBtn;