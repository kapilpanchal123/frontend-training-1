import { useActionState } from 'react';
import './App.css';

type FormDataObject = {
  name: string,
  counter: number
};

function App() {

  const increment = async (previousState: FormDataObject, formData: FormData) => {
    const userName = String(formData.get("username") || previousState.name);
    const data: FormDataObject = {
      name: userName,
      counter: previousState.counter + 1,
    }

    console.log("⏳ Simulating slow network...");

    // 💤 simulate 1 second network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("✅ Network response received!");

    return data;
  };

  const [state, action, isPending] = useActionState(increment, {
    name: "",
    counter: 0,
  });

  // const submitFormActionHandler = async(formData: FormData) => {
  //   console.log("Form Submitted: ", formData.get("username"));
  // };

  return (
    <>
      <form action={action}>
        <input name='username' placeholder='Enter Username'/>
        <p>{state.name ? `${state.name}: ${state.counter}` : 'Enter a username to Start'}</p>
        <button type='submit' disabled={isPending}>{isPending ? "Submitting" : "Submit"}</button>
      </form>
    </>
  )
}

export default App;
