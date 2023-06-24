// collection of your components page
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { Link } from "react-router-dom";
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
      localStorage.setItem("user", JSON.stringify(user[0])); // user[0] is an object{}
      console.log(user);
      navigate("/");
      // navigate to new page
    } catch (err) {
      console.log(err);
      setError("email or user is not valid");
    }
  };

  return (
    <section className="containerOfContainer">
      <section className="container-">
        <h1> SignIn</h1>
        <form className="signIn-form" onSubmit={handleSubmit}>
          <input
            className="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            className="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          ></input>

          <div className="er"> {err && <p>email or user is not valid</p>}</div>
          <button className="signInButton ">Submit</button>

          <div className="word-">
            Don't have an account ?{" "}
            <Link to={"/signUp"}>
              <span className="haveA-signIn">Sign Up</span>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
}

export default SignIn;
