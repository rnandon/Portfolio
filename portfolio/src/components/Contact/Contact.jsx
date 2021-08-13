import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import './Contact.css'
import SectionTitle from '../SectionTitle/SectionTitle';

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
            <div className="">
                <SectionTitle sectionName="Let's Chat" />
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
            </div>
        )
    }
}

export default Contact;