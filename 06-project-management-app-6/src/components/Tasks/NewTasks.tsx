import { useState, type ChangeEvent } from 'react';

type Props = {
  onAdd: (text: string) => void;
}

const NewTasks = ({ onAdd }: Props) => {
  const[enteredTask, setEnteredTask] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    setEnteredTask("");
    onAdd(enteredTask);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <input 
          type="text" 
          className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
          onChange={(event) => handleChange(event)}
          value={ enteredTask }/>
        <button onClick={ handleClick } className="text-stone-700 hover:text-stone-950">Add Task</button>
      </div>
    </>
  )
}

export default NewTasks;