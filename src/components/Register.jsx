import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
    contact: "",
  });

  const handleChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  // yesma api actual api rakhni
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log(registerInfo);
    setLoading(true);
    try {
      await axios.post("https://localhost:8000/api/register", registerInfo);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegisterSubmit} className="register">
      <h1>Register</h1>
      <div className="registerfields">
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          name="address"
          type="text"
          placeholder="Address"
          onChange={handleChange}
        />

        <input
          name="contact"
          type="text"
          placeholder="Contact"
          onChange={handleChange}
        />
        <button>{loading ? "Registering..." : "Register"}</button>
      </div>
    </form>
  );
};

export default Register;
