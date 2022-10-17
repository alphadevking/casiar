import { useState, useEffect } from 'react';

function DigitalClock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  // Adding an empty array to a useEffect hook tells it to run the function just once.
  useEffect ( () => {
    setInterval (refreshClock, 1000);
  }, []);

  return (
    <span>
      {date.toLocaleTimeString('en-US')}
    </span>
  );
}

export default DigitalClock;