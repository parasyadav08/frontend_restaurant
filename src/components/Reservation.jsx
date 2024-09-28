import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState(""); // Changed to LastName
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(""); // Changed to string for better handling
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!firstName || !LastName || !email || !phone || !date || !time) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://restaurant-backend-1-ifuf.onrender.com/api/v1/reservation/send",
        { 
          firstName, 
          LastName, // Ensure this is used correctly
          email, 
          phone, 
          date, 
          time 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      // Reset form fields
      setFirstName("");
      setLastName(""); // Reset LastName
      setPhone(""); // Reset to empty string
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      // Handle potential errors gracefully
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}> {/* Use onSubmit for form submission */}
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required // Optional: Add required attribute for validation
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={LastName} // Updated to LastName
                  onChange={(e) => setLastName(e.target.value)} // Updated to LastName
                  required // Optional: Add required attribute for validation
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required // Optional: Add required attribute for validation
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required // Optional: Add required attribute for validation
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required // Optional: Add required attribute for validation
                />
                <input
                  type="tel" // Changed to tel for better mobile support
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required // Optional: Add required attribute for validation
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
