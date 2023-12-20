import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const handleChange = (e) => {
    setRegisterInfo(...registerInfo, { [e.target.name]: e.target.value });
  };

  // yesma api actual api rakhni
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
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
        <input type="text" placeholder="Username" onChange={handleChange} />
        <input type="email" placeholder="Email" onChange={handleChange} />
        <input type="text" placeholder="Address" onChange={handleChange} />
        <input type="text" placeholder="Contact" onChange={handleChange} />
        <button>{loading ? "Registering..." : "Register"}</button>
      </div>
    </form>
  );
};

export default Register;
