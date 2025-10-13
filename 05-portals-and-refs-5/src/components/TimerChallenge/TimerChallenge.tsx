import { useRef, useState } from 'react';
import ResultModal from '../ResultModal/ResultModal';

type Props = {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({title, targetTime}: Props) => {
  const timer = useRef<number>(0);
  const CONVERSION = 1000;
  const dialog = useRef<HTMLDialogElement>(null);
  // const [timerExpired, setTimerExpired] = useState<boolean>(false);
  // const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const[timeRemaining, setTimeRemaining] = useState<number>(targetTime * CONVERSION);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * CONVERSION;

  if(timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current?.open();
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      // setTimerExpired(true);
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      // dialog.current?.open();
    }, 10);
    // setTimerStarted(true);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current?.open();
  }

  return (
    <>
      <ResultModal ref={dialog} 
        remainingTime={timeRemaining} 
        targetTime={targetTime} 
        onReset={handleReset}/>
      <section className="challenge">
        <h2>{ title }</h2>
        <p className="challenge-time">{ targetTime } second{ targetTime > 1 ? "s" : "" }</p>
        <p>
          <button onClick={ timerIsActive ? handleStop : handleStart }>
            { timerIsActive ? "Stop" : "Start" } Challenge
          </button>
        </p>
        <p className={ timerIsActive ? "active" : undefined }>
          { timerIsActive ? "Time is running..." : "Timer Inactive" } 
        </p>
      </section>
    </>
  )
}

export default TimerChallenge;