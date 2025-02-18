import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Si el tiempo ha terminado, muestra "Time's up!"
  if (Object.keys(timeLeft).length === 0) {
    return <span>Time's up!</span>;
  }

  return (
    <div  className='flex font-display  z-50 justify-center  mx-auto w-full text-white gap-8 text-center text-base'>
      <div className='flex flex-col'>
        <span className='text-3xl' >{timeLeft.days}</span>
        <span className='text-sm'>Días</span>
      </div>
      <div className='flex flex-col'>
        <span className='text-3xl' >{timeLeft.hours}</span>
        <span className='text-sm'>Hrs</span>
      </div>
      <div className='flex flex-col'>
        <span className='text-3xl' >{timeLeft.minutes}</span>
        <span className='text-sm'>Min</span>
      </div>
      <div  className='flex flex-col'>
        <span className='text-3xl' >{timeLeft.seconds}</span>
        <span className='text-sm'>Seg</span>
      </div>
    </div>
  );
};



export default CountdownTimer;