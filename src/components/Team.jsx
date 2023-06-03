import React from "react";
import TeamCard from "./TeamCard";
import { users } from "@/app/hoc/data";
import Loading from "./Loading";
import { createClient } from 'contentful';



async function getTeam() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  });

  const response = await client.getEntries({ content_type: 'team' });
  return response.items;
}

const Team = async () => {
  const teams = await getTeam();
  const data = teams.map((item) => item.fields);


  if (!Array.isArray(data)) {
    return <Loading />;
  }


   
    return (
      <section className="center" id="team">
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
          {data.map((team) => {
            const assetId = team.image.sys.id; // Extract the asset ID
            const imageUrl = `https://cdn.contentful.com/assets/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/${assetId}`;
            return <TeamCard key={team.id} data={team} images={imageUrl} />;
          })}
  
          </div>
        </div>
      </section>
    );


};

export default Team;
