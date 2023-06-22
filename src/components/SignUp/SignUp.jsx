// collection of your components page
import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [address , setAddress]=useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [postalCode ,SetPostalCode]=useState();
  const [city, setCity] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: user } = await axios.post("http://localhost:3001/users", {
        username,
        password,
        email,
        city,
        postalCode,
        phone,
        country,
        address,
      });

      await axios.post("http://localhost:3001/carts", {
        userId: user.id,
        products: [],
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
        placeholder="username"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
      />

      <input
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        required
        placeholder="Country"
      />
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        required
        placeholder="Address"
      />
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        required
        placeholder="City"
      />

      <input
        type="text"
        onChange={(e) => SetPostalCode(e.target.value)}
        required
        placeholder=" Postal Code"
      />
      <input
        type="text"
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder="Phone"
      />

      <button>Submit</button>
    </form>
  );
}

export default SignUp;
