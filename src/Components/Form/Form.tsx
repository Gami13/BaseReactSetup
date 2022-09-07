import { useEffect, useState } from "react";


import "./RegisterForm.css";
const RegisterForm = () => {
  const [username, updateUsername] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [passwordConfirm, updatePasswordConfirm] = useState("");
  const [usernameErrors, setUsernameError] = useState<any>([]);
  const [emailErrors, setEmailError] = useState<any>([]);
  const [passwordErrors, setPasswordError] = useState<any>([]);


  return (
    <div className="registerForm">
      <div className="artWrapper">
        <img className="art" src={art}></img>
      </div>
      <form //480px
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >

     

          
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => updateUsername(e.target.value)}
            onBlur={validateUsername}
          />
  


          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
            onBlur={validatePassword}
          />
    


        <button className="submitButton" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
