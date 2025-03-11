import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
    <Container>
      <Row>
        {/* Column 1: Company Info */}
        {/* <Col md="4" className="mb-3">
          <h5>MyCourses</h5>
          <p>Your one-stop platform for online courses.</p>
        </Col> */}

        {/* Column 2: Links */}
        {/* <Col md="4" className="mb-3">
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/courses" className="text-white">Courses</a></li>
            <li><a href="/about" className="text-white">About Us</a></li>
            <li><a href="/contact" className="text-white">Contact</a></li>
          </ul>
        </Col> */}

        {/* Column 3: Contact Info */}
        {/* <Col md="4" className="mb-3">
          <h5>Contact</h5>
          <p>Email: support@mycourses.com</p>
          <p>Phone: +1 234 567 890</p>
        </Col> */}
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <p>&copy; {new Date().getFullYear()} MyCourses. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
