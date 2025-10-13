import { useRef } from 'react';
import Input from './Input';
import type { ProjectData } from '../Data';

type Props = {
  onAdd: (projectData: ProjectData) => void;
}

const NewProject = ({onAdd}: Props) => {

  const title = useRef<string>("");
  const description = useRef<string>("");
  const dueDate = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const enteredTitle = title.current;
    const enteredDescription = description.current;
    const enteredDueDate = dueDate.current;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate!,
    });
  };

  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">Cancel</button>
          </li>
          <li>
            <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label={"Title"} isTextArea={false} />
          <Input ref={description} label={"Description"} isTextArea={true} />
          <Input type="date" ref={dueDate} label={"Due Date"} isTextArea={false} />
        </div>
      </div>
    </>
  )
}

export default NewProject;