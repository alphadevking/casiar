import { useState, useEffect } from 'react';

function DigitalClock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect ( () => {
    setInterval (refreshClock, 1000);
  })

  return (
    <span>
      {date.toLocaleTimeString('en-US')}
    </span>
  );
}
export default DigitalClock;