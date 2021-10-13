import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ApiKeys from '../ApiKeys';
import './Contact.css'
import SectionTitle from '../SectionTitle/SectionTitle';
import useForm from '../../hooks/useForm';

export default function Contact(props) {
    const [contactMethod, setContactMethod] = useState("");
    const { formValues, handleChange, handleSubmit } = useForm((event) => {sendEmail(event, formValues)});

    async function sendEmail(event, emailInfo) {
        event.preventDefault();
        emailjs.sendForm(ApiKeys.SERVICE_ID, ApiKeys.TEMPLATE_ID, event.target, ApiKeys.USER_ID).then(result => {alert("Message Sent!")}, error => {alert("Encountered an error, please try again.")});
    }

    return (
        <div className="container-fluid" >
            <SectionTitle sectionName="Contact Me" />
            <div className="row">
                <div className="col-sm-1" />
                <form onSubmit={(event) => sendEmail(event, formValues)} className="col-sm-10 align-self-center" >
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">Name</label>
                        <input type="text" className="form-control" name="userName" id="userName" aria-describedby="userName" onChange={(event) => handleChange(event)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input type="text" className="form-control" name="company" id="company" aria-describedby="company" onChange={(event) => handleChange(event)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactMethod" className="form-label">Preferred Contact Method:</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => setContactMethod("email")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Email
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={() => setContactMethod("phone")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Phone
                            </label>
                        </div>
                        {contactMethod === "phone" &&
                            <div className="mb-3">
                              <label htmlFor="contact" className="form-label">Phone number</label>
                              <input type="phone" className="form-control" name="contact" id="contact" aria-describedby="emailHelp" />
                            </div>
                        }
                        {contactMethod === "email" &&
                            <div className="mb-3">
                              <label htmlFor="contact" className="form-label">Email address</label>
                              <input type="email" className="form-control" name="contact" id="contact" aria-describedby="emailHelp" />
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" name="message" id="message" aria-describedby="message" onChange={(event) => handleChange(event)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}