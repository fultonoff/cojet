'use client'

import React, { useState, useRef, Fragment  } from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Notification from './Notification'
import toast, { Toaster } from 'react-hot-toast';
import logo from '../images/logoFly1.png'
import Image from 'next/image'
import Reveal from '../app/Hook/useReveal'

import Maps from "./Maps";

const Contact = () => {
  const form = useRef();
  const { register, handleSubmit } = useForm();
  const [notification, setNotification] = useState(false);
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [subject, setSubject]= useState('')
  const [message, setMessage]= useState('')



  const onSubmit = (e) =>{ 
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abnojef",
        "template_rwgwook",
        form.current,
        "T9GmuSuZtiszemKYT"
      )
      .then(
        (result) => {
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
          setNotification(true)

          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={logo}
                      alt="logo"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      COJET
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Thank you for react out, we will get back to you ASAP!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
        },
        (error) => {
          console.log(error.text);
        }
      );
  
  }


  return (
    <section className="bg-darkbg py-[70px]" id="contact">
      <Reveal>


     
      <div className="center text-white">
        <h2 className="text-[30px] font-Playfair text-center">Contact Us</h2>
        <p className="text-center max-w-2xl mx-auto">
          Connect with us today! Our contact section is your gateway to reaching
          our team. Whether you have questions, inquiries, or seek
          collaborations, we are here to assist you.
        </p>
      
        <div className="flex flex-col sm:flex-row mt-[60px] w-full gap-2">
          <form className="sm:w-1/2" ref={form} onSubmit={onSubmit}>
            <div className="w-full flex flex-col gap-4">
              <Input
                {...register("firstName", { required: true, maxLength: 20 })}
                color="amber"
                variant="standard"
                label="Full name"
                name="from_name"
                required
                type="text"
                className="w-full"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
              <Input
                {...register("email", {
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                color="amber"
                variant="standard"
                label="Email"
                name="from_email"
                required
                type="mail"
                className="text-white w-full"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <Input
                color="amber"
                variant="standard"
                label="Subject"
                name="from_subject"
                required
                type="text"
                className="text-white w-full"
                value={subject}
                onChange={(e)=> setSubject(e.target.value)}
              />
              <Textarea
                {...register("message", { required: true, maxLength: 200 })}
                color="amber"
                variant="standard"
                label="Message"
                name="message"
                required
                className="w-full"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="mt-[20px] rounded5 bg-gold hover:shadow-0 shadow-none font-Mulish hover:bg-white hover:text-gold transtion-all ease-in-out duration-200"
            >
              Submit
            </Button>
          </form>

          <div className="sm:w-1/2 rounded5 overflow-hidden">
            <Maps className="" />
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default Contact;
