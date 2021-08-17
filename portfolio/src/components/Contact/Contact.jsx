import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import './Contact.css'
import SectionTitle from '../SectionTitle/SectionTitle';

class Contact extends Component {
    constructor(props){
        super(props);
        this.hideModalOuter = props.hideModal;
        
        this.state = {
            name: "",
            email: "",
            phone: "",
            company: ""
        }
    }

    sendEmail = (event) => {
        event.preventDefault()
        console.log(`Name: ${this.state.name}, \nEmail: ${this.state.email}, \nCompany: ${this.state.company}, \nPhone: ${this.state.phone}`)
        this.props.hideModal();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    hideModal = () => {
        this.hideModalOuter();
        this.resetForm();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.sendEmail(event);
        this.hideModal();
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            phone: "",
            company: ""
        })
    }

    render(){
        return (
            <Modal
                show={this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Let's Chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.sendEmail} className="mx-5 p-5">
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={this.state.name} name="name" type="text" placeholder="Name" onChange={this.handleChange} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={this.state.email} name="email" type="email" placeholder="Email" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="company">
                            <Form.Label>Company</Form.Label>
                            <Form.Control value={this.state.company} name="company" type="text" placeholder="Company" onChange={this.handleChange} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control value={this.state.phone} name="phone" type="tel" placeholder="(XXX) XXX-XXXX ext. XXXX" onChange={this.handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.hideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Contact;



// class EditSongModal extends React.Component {



//     render() {
//         return (
//             <div className={this.props.show ? "modal display-block" : "modal display-none"} >
//                 <section className="modal-main" >
//                     <form color="white" onSubmit={() => {console.log("submitted form")}} class="m-3">
//                         <div class="mb-3">
//                             <label for="title" class="form-label">Song Title:</label>
//                             <input id="title" name="title" class="form-control" type="text" value={this.state.title || ""} onChange={this.handleChange} />
//                         </div>    
//                         <div class="mb-3">
//                             <label for="artist" class="form-label">Artist:</label>
//                             <input id="artist" name="artist" class="form-control" type="text" value={this.state.artist || ""} onChange={this.handleChange} />
//                         </div>    
//                         <div class="mb-3">
//                             <label for="album" class="form-label">Album:</label>
//                             <input id="album" name="album" class="form-control" type="text" value={this.state.album || ""} onChange={this.handleChange} />
//                         </div>    
//                         <div class="mb-3">
//                             <label for="release_date" class="form-label">Release Date:</label>
//                             <input id="release_date" name="release_date" class="form-control" type="date" value={this.state.release_date || ""} onChange={this.handleChange} />
//                         </div>    
//                         <div class="mb-3">
//                             <label for="genre" class="form-label">Genre:</label>
//                             <input id="genre" name="genre" class="form-control" type="text" value={this.state.genre || ""} onChange={this.handleChange} />
//                         </div>
//                     </form>
//                     <button class="btn btn-secondary kbc-button kbc-button-sm" onClick={this.hideModal}>Cancel</button>
//                     <button class="btn btn-primary kbc-button kbc-button-sm" onClick={this.handleSubmit}>Submit Changes</button>
//                 </section>
//             </div>
//         );
//     }
// }

// export default EditSongModal;