import { useRef, useState } from 'react';

type Props = {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({title, targetTime}: Props) => {
  const timer = useRef(0);
  const [timerExpired, setTimerExpired] = useState<boolean>(false);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  }

  return (
    <>
      <section className="challenge">
        <h2>{ title }</h2>
        { timerExpired && <p>You Lost</p> }
        <p className="challenge-time">{ targetTime } second{ targetTime > 1 ? "s" : "" }</p>
        <p>
          <button onClick={ timerStarted ? handleStop : handleStart }>
            { timerStarted ? "Stop" : "Start" } Challenge
          </button>
        </p>
        <p className={ timerStarted ? "active" : undefined }>
          { timerStarted ? "Time is running..." : "Timer Inactive" } 
        </p>
      </section>
    </>
  )
}

export default TimerChallenge;