import { useState, useEffect } from 'react';
// import "./Form.css"

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Validate form whenever email or password changes
  useEffect(() => {
    const emailValid = email.includes('@');
    const passwordValid = password.length >= 8;
    setIsValid(emailValid && passwordValid);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit" disabled={!isValid}>
        Sign Up
      </button>
    </form>
  );
}