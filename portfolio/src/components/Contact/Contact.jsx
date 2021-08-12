import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './Contact.css'

class Contact extends Component {
    constructor(props){
        super(props);
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
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <Form onSubmit={this.sendEmail}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={this.state.name} type="text" placeholder="Name" onChange={this.handleChange} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={this.state.email} type="email" placeholder="Email" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control value={this.state.company} type="text" placeholder="Company" onChange={this.handleChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={this.state.phone} type="tel" placeholder="(XXX) XXX-XXXX ext. XXXX" onChange={this.handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        )
    }
}

export default Contact;