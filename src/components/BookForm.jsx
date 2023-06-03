import { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";

const BookForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('');


  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d+$/;
  const departureRegex = /^[A-Za-z\s]+$/;
  const arrivalRegex = /^[A-Za-z\s]+$/;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const passengersRegex = /^\d+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name.match(nameRegex)) {
      alert('Please enter a valid name.');
      return;
    }

    if (!email.match(emailRegex)) {
      alert('Please enter a valid email.');
      return;
    }

    if (!phoneNumber.match(phoneRegex)) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (!departure.match(departureRegex)) {
      alert('Please enter a valid departure.');
      return;
    }

    if (!arrival.match(arrivalRegex)) {
      alert('Please enter a valid arrival.');
      return;
    }

    if (!date.match(dateRegex)) {
      alert('Please enter a valid date.');
      return;
    }

    if (!passengers.match(passengersRegex)) {
      alert('Please enter a valid number of passengers.');
      return;
    }

    // Handle form submission logic here
    // console.log('Form submitted:', { name, email, phoneNumber, departure, arrival, date, passengers });
  };

  return (
    <form onSubmit={handleSubmit} className='text-whiite mt-[80px]  max-w-4xl mx-auto px-4 overflow-hidden'>

        <div className='w-full flex flex-col sm:flex-row text-white gap-4 mb-4'>

      
        <Input type="text" variant="standard" color="amber" label='Your Name' value={name} onChange={(e) => setName(e.target.value)} required  className=' border-b border-gold w-full bg-darkbg  focus:outline-none '/>
      
        <Input type="email" variant="standard" color='amber' label='Email' value={email} onChange={(e) => setEmail(e.target.value)}  required className='border-b border-gold w-full bg-darkbg  focus:outline-none'/>
     
        <Input type="tel" variant="standard" color='amber' label='Phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className='border-b border-gold w-full bg-darkbg  focus:outline-none'/>
    
        </div>
      
      <div className='w-full flex flex-col sm:flex-row text-white gap-4 flex-wrap'>

      
        <Input type="text" variant="standard" color='amber' label='Departure airport' value={departure} onChange={(e) => setDeparture(e.target.value)} required  className=' border-b border-gold w-full bg-darkbg  focus:outline-none'/>
      
      
      
        <Input type="text" variant="standard" color='amber' label='Arrival airport' value={arrival} onChange={(e) => setArrival(e.target.value)} required  className=' border-b border-gold w-full bg-darkbg  focus:outline-none'/>
     
      
      
        <Input type="date" variant='standard' label='Date' color='amber' value={date} onChange={(e) => setDate(e.target.value)} required placeholder='Date' className='border-b border-gold w-full bg-darkbg  focus:outline-none '/>
      
      
     
        <Input type="number" variant='standard' label='Passengers' color='amber' value={passengers} onChange={(e) => setPassengers(e.target.value)} required className=' border-b border-gold w-full bg-darkbg  focus:outline-none'/>
    

      </div>
      
      
      <Button type="submit" className='mt-[20px] rounded5 bg-gold hover:shadow-0 shadow-none font-Mulish hover:bg-white hover:text-gold transtion-all ease-in-out duration-200'>Submit</Button>
    </form>
  );
};

export default BookForm;
