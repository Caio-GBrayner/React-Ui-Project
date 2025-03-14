import 'bootstrap/dist/css/bootstrap.min.css';
import {BsCalendar2CheckFill} from "react-icons/bs";
import {Col, Container, Row, Card, ListGroup } from 'react-bootstrap';
import Search from "./components/Search";
import AddAppiontment from './components/AddAppointment';
import appointmentList from "./data.json"


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <h1 className='text-center fw-light mt-3'><BsCalendar2CheckFill/> Appointments</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <AddAppiontment/>
        </Row>
        <Row className='justify-content-center'> 
          <Col md={4}>
            <Search/>
          </Col>
        </Row>
        <Row className='Justify-content-center'>
          <Col md="8">
            <Card className='mb-3'>
              <Card.Header>Appointments</Card.Header>
              <ListGroup variant='flush'>
                {appointmentList.map(appointment => (
                  <ListGroup.Item>
                    <p><small>Date: {appointment.aptDate}</small></p>
                    <p><strong>First Name: {appointment.firstName}</strong></p>
                    <p><strong>Last Name: {appointment.lastName}</strong></p>
                    <p><strong>Notes: {appointment.aptNotes}</strong></p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
