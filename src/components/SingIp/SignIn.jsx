// collection of your components page
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get  the current user 
    try {
      const { data: user } = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );

      if (user.length === 0) return setError(true);

      // save the user in local storage 
      localStorage.setItem("user", JSON.stringify(user[0]));// user[0] is an object{}
      console.log(user);
      navigate("/home");
      // navigate to new page
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      {err && <p>email or user is not valid</p>}
      <button>Submit</button>
    </form>
  );
}

export default SignIn;
