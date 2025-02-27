import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Bus.css";

const BusDetails = ({ token }) => {
  const { busId } = useParams();
  const [bus, setBus] = useState(null);

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const res = await axios.get(`https://kerala-bus.onrender.com/api/owner/get-bus/${busId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBus(res.data);
      } catch (error) {
        console.error("Error fetching bus details", error);
      }
    };

    fetchBus();
  }, [busId, token]);
  

  return (
    <div className="bus-container">
      {bus ? (
        <div className="bus-details">
          <h2>{bus.name}</h2>
          <p><strong>Route:</strong> {bus.route}</p>
          <p><strong>Seats:</strong> {bus.seats}</p>
        </div>
      ) : (
        <p>Loading bus details...</p>
      )}
    </div>
  );
};

export default BusDetails;
