import { useRef } from 'react';
import Input from './Input';
import type { ProjectData, ResultModalHandle } from '../Data';
import Modal from '../Modal/Modal';

type Props = {
  onAdd: (projectData: ProjectData) => void;
  onCancel: () => void;
}

const NewProject = ({onAdd, onCancel}: Props) => {
  const modal = useRef<ResultModalHandle>(null);
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const enteredTitle = title.current?.value ?? "";
    const enteredDescription = description.current?.value ?? "";
    const enteredDueDate = dueDate.current?.value ?? "";

    if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
      // show the error modal
      modal.current?.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonTitle="Okay"> 
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure that you provide a valid value to every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
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
};

export default NewProject;