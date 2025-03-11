import { React, useEffect} from "react";
import { Button, Container, Row, Col } from 'reactstrap';


const Hero = () => {

   useEffect(() => {
         document.title = "Home"
     },[]);
    return (
        <div className=" HeroSection d-flex justify-content-center align-items-start vh-100" >
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-3">Learn New Skills, Anytime, Anywhere</h1>
                        <p className="lead">
                            Enroll in the best online courses from industry experts and start learning today.
                        </p>
                        <Button style={{ marginTop: "440px" }} color="primary" size="lg" href="/courses">
                            Explore Courses
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;