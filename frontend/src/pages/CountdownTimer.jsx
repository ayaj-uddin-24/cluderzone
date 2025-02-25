import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [alarmTriggered, setAlarmTriggered] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isStarted && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (timeLeft <= 0 && !alarmTriggered && isStarted) {
      triggerAlarm();
      setAnimationTriggered(true);
    }

    return () => clearInterval(intervalId);
  }, [timeLeft, isStarted, alarmTriggered]);

  const triggerAlarm = () => {
    setAlarmTriggered(true);
    const audio = new Audio("/audio.mp3");
    audio.play();
  };

  const formatTimeLeft = (time) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${hours}h : ${minutes}m : ${seconds}s`;
  };

  const startCountdown = () => {
    const totalMilliseconds = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
    setTimeLeft(totalMilliseconds);
    setIsStarted(true);
    setAlarmTriggered(false);
    setAnimationTriggered(false);
  };

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        animationTriggered
          ? "bg-animated-gradient animate-bounce"
          : "bg-gradient-to-br from-blue-700 via-blue-500 to-blue-600"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-tl from-blue-700 to-blue-500 shadow-2xl rounded-2xl p-12 text-center transition duration-500 transform ${
          animationTriggered ? "scale-125 animate-scale-up" : "hover:scale-110"
        }`}
      >
        <motion.h1
          className={`text-5xl font-bold mb-8 text-white bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse drop-shadow-lg ${
            animationTriggered ? "animate-bounce" : ""
          }`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contest Countdown
        </motion.h1>

        <div className="mb-6">
          <motion.input
            type="number"
            className="mr-2 p-2 rounded"
            placeholder="Hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.input
            type="number"
            className="mr-2 p-2 rounded"
            placeholder="Minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.input
            type="number"
            className="p-2 rounded"
            placeholder="Seconds"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>

        <motion.button
          className="px-6 py-3 mb-8 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
          onClick={startCountdown}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Start Timer
        </motion.button>

        <motion.div
          className="text-4xl font-semibold text-gray-900 tracking-wide mb-6 bg-white p-4 rounded-lg shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {timeLeft > 0 ? (
            <p>{formatTimeLeft(timeLeft)}</p>
          ) : (
            <p>Contest Ended</p>
          )}
        </motion.div>

        <motion.div
          className="flex items-center justify-center mt-6"
          initial={{ opacity: 0, rotate: 180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-28 h-28 rounded-full border-8 border-dashed border-yellow-500 animate-spin shadow-lg"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}

<style jsx>{`
  @keyframes scale-up {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.2);
    }
  }
  .animate-scale-up {
    animation: scale-up 2s ease-in-out infinite;
  }
`}</style>;
