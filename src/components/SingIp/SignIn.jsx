// collection of your components page
import axios from "axios";
import React, { useState } from "react";
import "./SignIn.css"

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: user } = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      console.log(user);
      if (user.length === 0) return setError(true);

      // save the user
      localStorage.setItem("user", JSON.stringify(user[0]));
      console.log("ok");
      // navigate to new page
    } catch (err) {
      console.log(err);
      setError("email or user is not valid");
    }
  };

  return (
    <section className="containerOfContainer">
      <section className="container-">
        <h1 className="h1-"> SignUp</h1>
        <form className="form-" onSubmit={handleSubmit}>
          <input
            className="email input-"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            className="password input-"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          ></input>

          <div className="er"> {err && <p>email or user is not valid</p>}</div>
          <button className="button">Submit</button>

          <div className="word-">
            I don't have an account <a href="">Sign Up</a>
          </div>
        </form>
      </section>
    </section>
  );
}

export default SignIn;
