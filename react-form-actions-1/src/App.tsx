import { useActionState, useOptimistic } from 'react';
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
      counter: previousState.counter > 10 ? 10 : previousState.counter + 1,
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

  const [optimisticState, addOptimisticUpdate] = useOptimistic(state, (currentState, formData: FormData) => {
    const username = String(formData.get("username") || currentState.name);
    return {
      name: username,
      counter: currentState.counter > 10 ? 10 : currentState.counter + 1,
    };
  });

  const handleAction = async(formData: FormData) => {
    addOptimisticUpdate(formData);
    await action(formData);
  };

  return (
    <>
      <form action={handleAction}>
        <input name='username' placeholder='Enter Username'/>
        <p>{optimisticState.name ? `${optimisticState.name}: ${optimisticState.counter}` : 'Enter a username to Start'}</p>
        <button type='submit' disabled={isPending}>{isPending ? "Submitting" : "Submit"}</button>
      </form>
    </>
  )
}

export default App;
