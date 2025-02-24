import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const contestStartTime = new Date().setHours(9, 30, 0); 
  const contestEndTime = new Date().setHours(1, 53, 0); 

  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [timeLeft, setTimeLeft] = useState(contestEndTime - currentTime);
  const [alarmTriggered, setAlarmTriggered] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTimeLeft(contestEndTime - currentTime);
    if (timeLeft <= 0 && !alarmTriggered) {
      triggerAlarm();
      setAnimationTriggered(true);
    }
  }, [currentTime, contestEndTime, timeLeft, alarmTriggered]);

  const triggerAlarm = () => {
    setAlarmTriggered(true);
    const audio = new Audio('/audio.mp3'); // path to the alarm sound
    audio.play();
  };

  const formatTimeLeft = (time) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${hours}h : ${minutes}m : ${seconds}s`;
  };

  return (
    <div className={`flex items-center justify-center h-screen ${animationTriggered ? 'bg-animated-gradient animate-bounce' : 'bg-gradient-to-br from-blue-700 via-blue-500 to-blue-600'}`}>
      <div className={`bg-gradient-to-tl from-blue-700 to-blue-500 shadow-2xl rounded-2xl p-12 text-center transition duration-500 transform ${animationTriggered ? 'scale-125 animate-scale-up' : 'hover:scale-110'}`}>
        <h1 className={`text-5xl font-bold mb-8 text-white bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse drop-shadow-lg ${animationTriggered ? 'animate-bounce' : ''}`}>
          Contest Countdown
        </h1>
        <div className="text-4xl font-semibold text-gray-900 tracking-wide mb-6 bg-white p-4 rounded-lg shadow-inner">
          {timeLeft > 0 ? (
            <p>{formatTimeLeft(timeLeft)}</p>
          ) : (
            <p>Contest Ended</p>
          )}
        </div>
        <div className="flex items-center justify-center mt-6">
          <div className="w-28 h-28 rounded-full border-8 border-dashed border-yellow-500 animate-spin-slow shadow-lg"></div>
        </div>
        <div className="mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
            Start New Countdown
          </button>
        </div>
      </div>
    </div>
  );
}
