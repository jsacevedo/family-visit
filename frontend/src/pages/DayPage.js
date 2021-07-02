import { useState, useEffect } from 'react';
import axios from 'axios';

import Event from '../components/Event';

const DayPage = ({ match }) => {
  const [day, setDay] = useState({ activities: [] });

  useEffect(() => {
    const fetchDay = async () => {
      const { data } = await axios.get(`/api/events/${match.params.id}`);

      setDay(data);
    };

    fetchDay();
  }, [match]);

  return (
    <>
      <h1>{day.date}</h1>
      {day.activities.map((activity) => (
        <Event activity={activity} key={activity.id} />
      ))}
    </>
  );
};

export default DayPage;
