import { useState } from 'react'

type Props = {
  name: string,
  symbol: string,
  isActive: boolean,
  onChangeName: (symbol: string, newName: string) => void;
}

const Player = ({name, symbol, isActive, onChangeName}: Props) => {
  const [playerName, setPlayerName] = useState<string>(name);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if(isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ?
            <input type='text' 
              onChange={handleChange} 
              value={playerName} 
              required/> : 
            <span className="player-name">{playerName}</span>
          }
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  )
};

export default Player;