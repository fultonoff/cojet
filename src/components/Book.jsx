"use client";

import React from "react";
import BookForm from "./BookForm";
import Reveal from "../app/Hook/useReveal";

const Book = () => {
  return (
    <section className="bg-darkbg w-full py-[70px] " id="book">
        <Reveal>
        <div className="flex justify-center items-center">
          <div className="center text-center text-white">
            <h1 className="font-Playfair text-4xl sm:text-[48px] ">
              Book a private jet
            </h1>
            <p className="font-Lato text-[17px] mt-[50px]">
              For the best rates please download the COJET App, otherwise
              provide your itinerary below.
            </p>
          </div>
        </div>

        {/* Form */}
        <BookForm />
    </Reveal>
      </section>
  );
};

export default Book;
