import { React, useEffect, useState} from "react";
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from "reactstrap";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can handle form submission here, e.g., sending data to an API or email service.
        setFormData({ name: '', email: '', message: '' }); // Reset the form after submission
    };

    
    useEffect(() => {
        document.title = "Contact Us"
    },[]);


    return (

        <div className="d-flex justify-content-center align-items-start vh-100">
            <Container className="mt-5">
                <Row>
                    <Col sm="12" md="8" className="mx-auto">
                        <h2 className="text-center mb-4">Contact Us</h2>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>

                            <div className="">
                                <Button color="primary" type="submit" className="w-45">
                                    Submit
                                </Button>
                                <Button
                                    color="secondary"
                                    type="button"
                                    className="w-45"
                                    style={{ marginLeft: "50px" }}
                                    onClick={() => setFormData({ name: '', email: '', message: '' })}
                                >
                                    Clear
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;
