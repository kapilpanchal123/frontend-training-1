import { useState } from 'react'
import Button from '../Button/Button';

type Props = {}

const AuthInputs = (props: Props) => {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleInputChange(identifier: string, value: string) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  // const emailNotValid = submitted && !enteredEmail.includes('@');
  // const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 rounded mx-auto shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="controls flex flex-col gap-2 mb-6">
        <p>
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  )
}

export default AuthInputs;