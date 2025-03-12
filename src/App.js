import 'bootstrap/dist/css/bootstrap.min.css';
import {BsCalendar2CheckFill} from "react-icons/bs";
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <h1 className='text-center fw-light mt-3'><BsCalendar2CheckFill/> Appointments</h1>
          <div className='d-grid gap-2'>
          <Button size='sm'>Hello world</Button>
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
          <h3>Hello, bootstrap</h3>
          </Col>
          <Col md={3}>
          <h3>Hello, bootstrap</h3>
          </Col>
          <Col md={3}>
          <h3>Hello, bootstrap</h3>
          </Col>
          <Col md={3}>
          <h3>Hello, bootstrap</h3>
          </Col>
        </Row>
      </Container>
      <h1><BsCalendar2CheckFill/>Appointments</h1>
      <Button>Hello world</Button>
    </div>
  );
}

export default App;
