import { useRef, useState } from 'react';
import ResultModal from '../ResultModal/ResultModal';

type Props = {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({title, targetTime}: Props) => {
  const timer = useRef<number>(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const [timerExpired, setTimerExpired] = useState<boolean>(false);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current?.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{ title }</h2>
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