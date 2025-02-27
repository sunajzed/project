import React, { useState } from "react";
import axios from "axios";
import "../styles/Bus.css";

const AddBus = ({ token }) => {
  const [formData, setFormData] = useState({ name: "", route: "", seats: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://kerala-bus.onrender.com/api/owner/add-bus", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Bus added successfully!");
    } catch (error) {
      console.error("Failed to add bus", error);
    }
  };

  return (
    <div className="bus-container">
      <form className="bus-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Bus Name" onChange={handleChange} required />
        <input type="text" name="route" placeholder="Route" onChange={handleChange} required />
        <input type="number" name="seats" placeholder="Seats" onChange={handleChange} required />
        <button type="submit" className="bus-btn">Add Bus</button>
      </form>
    </div>
  );
};

export default AddBus;
