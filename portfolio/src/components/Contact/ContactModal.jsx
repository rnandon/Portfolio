import React from 'react';
import Button from 'react-bootstrap/Button';
import Contact from './Contact'

function ContactModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Let's Chat
            </Button>
  
            <Contact
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
  
export default ContactModal;