import React, { useState } from "react";

type Props = {}

const Player = (props: Props) => {
  const [playerName, setPlayerName] = useState<string>("");
  const [isPlayer, setIsPlayer] = useState<boolean>(false);

  const handlePlayerInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

   const handlePlayerInputValueClicked = () => {
    setIsPlayer(true);
  };

  return (
    <section id="player">
      <h2>Welcome, {isPlayer ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={(event) => handlePlayerInputValueChange(event)}/>
        <button onClick={handlePlayerInputValueClicked}>Set Name</button>
      </p>
    </section>
  )
}

export default Player;