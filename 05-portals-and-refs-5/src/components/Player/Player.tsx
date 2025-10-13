import { useRef, useState } from "react";

type Props = {}

const Player = (props: Props) => {

  const playerNameRef = useRef<HTMLInputElement | null>(null);
  const [playerName, setPlayerName] = useState<string>("Unknown Entity");
  // const [isPlayer, setIsPlayer] = useState<boolean>(false);

  // const handlePlayerInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsPlayer(false);
  //   setPlayerName(event.target.value);
  //   // playerNameRef.current?.value;
  // };

   const handlePlayerInputValueClicked = () => {
    setPlayerName(playerNameRef.current!.value);
    
  };

  return (
    <section id="player">
      <h2>Welcome, {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameRef} type="text"/>
        <button onClick={handlePlayerInputValueClicked}>Set Name</button>
      </p>
    </section>
  )
}

export default Player;