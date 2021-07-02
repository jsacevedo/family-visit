import { Container, Row, Col, Card } from 'react-bootstrap';

const Event = ({ activity }) => {
  return (
    <>
      <Container className="my-3 p-3">
        <Row>
          <Col xs={2}>
            <Card.Title>{activity.time}</Card.Title>
          </Col>
          <Col>
            <Card.Title>{activity.name}</Card.Title>
            <Card.Text>{activity.location}</Card.Text>
            <Card.Text>{activity.description}</Card.Text>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Event;
