// collection of your components page
import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: user } = await axios.post("http://localhost:3001/users", {
        username,
        password,
        email,
      });

      await axios.post("http://localhost:3001/carts", {
        userId: user.id,
        cartItems: [],
      });
      // navigate to the sign in
      console.log("done");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input type="text" onChange={(e) => setEmail(e.target.value)} required />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button>Submit</button>
    </form>
  );
}

export default SignUp;
