import React from "react";
import TeamCard from "./TeamCard";
import { users } from "@/app/hoc/data";

const Team = () => {
  return (
    <section className="center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl sm:text-[48px] tracking-tight font-Playfair text-darkbg">
            Our Team
          </h2>
          <p className="font-Lato text-darkbg ">
          Our diverse and passionate team collaborates seamlessly, leveraging unique skills and perspectives to drive innovation. With a shared commitment to excellence, we deliver exceptional results and prioritize customer satisfaction. Meet our talented team below, united in our pursuit of success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user) => {
          return <TeamCard key={user.id} data={user} />;
        })}

        </div>
      </div>
    </section>
  );
};

export default Team;
