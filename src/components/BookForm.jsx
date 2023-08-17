"use client";

import React, { useState, useRef, Fragment  } from "react";
import { Input, Button } from "@material-tailwind/react";
import emailjs from "emailjs-com";
import Notification from './Notification'


const BookForm = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [notification, setNotification] = useState(false);

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  ;
  const departureRegex = /^[A-Za-z\s]+$/;
  const arrivalRegex = /^[A-Za-z\s]+$/;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const passengersRegex = /^\d+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abnojef",
        "template_rzhvn7c",
        form.current,
        "T9GmuSuZtiszemKYT"
      )
      .then(
        (result) => {
          setName('')
          setEmail('')
          setPhoneNumber('')
          setDeparture('')
          setArrival('')
          setDate('')
          setPassengers('')
          setNotification(true)
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Validate form inputs
    if (!name.match(nameRegex)) {
      alert("Please enter a valid name.");
      return;
    }

    if (!email.match(emailRegex)) {
      alert("Please enter a valid email.");
      return;
    }


    if (!departure.match(departureRegex)) {
      alert("Please enter a valid departure.");
      return;
    }

    if (!arrival.match(arrivalRegex)) {
      alert("Please enter a valid arrival.");
      return;
    }

    if (!date.match(dateRegex)) {
      alert("Please enter a valid date.");
      return;
    }

    if (!passengers.match(passengersRegex)) {
      alert("Please enter a valid number of passengers.");
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      className="text-whiite mt-[80px]  max-w-4xl mx-auto px-4 overflow-hidden"
    >
      {notification &&
      <Notification/>
      }
      <div className="w-full flex flex-col sm:flex-row text-white gap-4 mb-4">
        <Input
          type="text"
          variant="standard"
          color="amber"
          label="Your Name"
          value={name}
          name="from_name"
          onChange={(e) => setName(e.target.value)}
          required
          className=" border-b border-gold w-full bg-darkbg  focus:outline-none "
        />

        <Input
          type="email"
          variant="standard"
          color="amber"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-b border-gold w-full bg-darkbg  focus:outline-none"
          name="from_email"
        />

        <Input
          type="tel"
          variant="standard"
          color="amber"
          label="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="border-b border-gold w-full bg-darkbg  focus:outline-none"
          name="from_phone"
        />
      </div>

      <div className="w-full flex flex-col sm:flex-row text-white gap-4 flex-wrap">
        <Input
          type="text"
          variant="standard"
          color="amber"
          label="Departure airport"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          required
          className=" border-b border-gold w-full bg-darkbg  focus:outline-none"
          name="from_departure"
        />

        <Input
          type="text"
          variant="standard"
          color="amber"
          label="Arrival airport"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          required
          className=" border-b border-gold w-full bg-darkbg  focus:outline-none"
          name="from_arrival"
        />

        <Input
          type="date"
          variant="standard"
          label="Date"
          color="amber"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          placeholder="Date"
          className="border-b border-gold w-full bg-darkbg  focus:outline-none "
          name="from_date"
        />

        <Input
          type="number"
          variant="standard"
          label="Passengers"
          color="amber"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          required
          className=" border-b border-gold w-full bg-darkbg  focus:outline-none"
          name="from_passengers"
        />
      </div>

      <Button
        type="submit"
        className="mt-[20px] rounded5 bg-gold hover:shadow-0 shadow-none font-Mulish hover:bg-white hover:text-gold transtion-all ease-in-out duration-200"
      >
        Submit
      </Button>
    </form>
  );
};

export default BookForm;
