import { React, useEffect} from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const AboutUs = () => {

    useEffect(() => {
        document.title = "About Us"
    },[]);

    return (
        <div className="d-flex justify-content-center align-items-start vh-100">
            <Container className="mt-5">
                <Row>
                    <Col sm="12" md="6" className="mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h2">About Us</CardTitle>
                                <CardText>
                                    We are a team of passionate individuals dedicated to providing the best online courses
                                    to help you succeed in your career. Our mission is to offer high-quality education to
                                    learners around the world, enabling them to acquire the skills they need to excel in
                                    today's competitive job market.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" className="mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h2">Our Mission</CardTitle>
                                <CardText>
                                    Our mission is to make learning accessible to everyone. We believe in the power of
                                    education and strive to create an inclusive learning environment that allows people of
                                    all backgrounds to thrive.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col sm="12">
                        <h3>Meet the Team</h3>
                        <p>Our team consists of professionals with years of experience in the industry, committed to your success.</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    {/* Adjusting the size of the image and card */}
                   
                    {/* Smaller card and image */}
                    <Col sm="12" md="4" className="mb-4">
                        <Card className="team-card small-card">
                            <img 
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww" 
                                alt="Team Member 3" 
                                className="card-img-top small-img"
                            />
                            <CardBody>
                                <CardTitle tag="h4">Jane Smith</CardTitle>
                                <CardText>Co Founder</CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12" md="4" className="mb-4">
                        <Card className="team-card small-card">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww" 
                                alt="Team Member 3" 
                                className="card-img-top small-img"
                            />
                            <CardBody>
                                <CardTitle tag="h4">Mike Johnson</CardTitle>
                                <CardText>Marketing Manager</CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12" md="4" className="mb-4">
                        <Card className="team-card small-card">
                            <img 
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" 
                                alt="Team Member 3" 
                                className="card-img-top small-img"
                            />
                            <CardBody>
                                <CardTitle tag="h4">Sana Da</CardTitle>
                                <CardText>Full Stack Developer</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default AboutUs;
