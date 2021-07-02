import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Day from '../components/Day';
import { Accordion } from 'react-bootstrap';

const ItineraryPage = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const fetchDays = async () => {
      const { data } = await axios.get('/api/events');

      setDays(data);
    };

    fetchDays();
  }, []);

  const today = new Date();
  const todayString = [
    today.getFullYear(),
    ('0' + (today.getMonth() + 1)).slice(-2),
    ('0' + today.getDate()).slice(-2),
  ].join('-');

  const defaultKey = days.filter((day) => day.date === todayString);

  return (
    <>
      <h1>Family Visit 2021</h1>
      <Accordion
        defaultActiveKey={defaultKey.length > 0 ? defaultKey[0]._id : '0'}
      >
        {days.map((day) => (
          <Day key={day._id} day={day} />
        ))}
      </Accordion>
    </>
  );
};

export default ItineraryPage;
