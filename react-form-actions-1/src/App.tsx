import './App.css';

function App() {

  const submitFormActionHandler = async(formData: FormData) => {
    console.log("Form Submitted: ", formData.get("username"));
  };

  return (
    <>
      <form action={submitFormActionHandler}>
        <input name='username'/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App;
