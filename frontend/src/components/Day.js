import { Accordion, Card, Button } from 'react-bootstrap';

import Event from './Event';

const Day = ({ day }) => {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="info" eventKey={day._id}>
          {day.date}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={day._id}>
          <Card.Body>
            {day.activities.map((activity) => (
              <Event activity={activity} key={activity.id} />
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card.Header>
    </Card>
  );
};

export default Day;
