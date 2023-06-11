

import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image from "../images/histotybg.jpg";
import Image from "next/image";
import NewsCard from "./NewsCard";
import { AiFillCaretLeft } from "react-icons/ai";
import Link from "next/link";
import { createClient } from "contentful";
import Loading from "./Loading";

async function getBlog() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({ content_type: "blogPost" });
  return response.items;
}

const News = async () => {
  const blogs = await getBlog();
  const data = blogs.map((item) => item.fields);


  if ((!data)) {
    return <Loading />;
  }

  return (
    <section className="center pb-[60px]">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl sm:text-[48px] tracking-tight font-Playfair text-darkbg">
          Latest news
        </h2>
        <p className="font-Lato text-darkbg ">
          Stay informed about the latest private aviation trends, news, and
          insights. Explore new jet models, cutting-edge technologies, and
          industry updates. From industry news to expert interviews, our concise
          articles offer valuable information for jet enthusiasts, frequent
          flyers, and anyone curious about private jets. Discover the latest
          advancements and stay inspired. Check back often for exciting updates!
        </p>
      </div>

      <div>
        <Splide
          aria-label="My Favorite Images"
          className="w-full"
          options={{
            type: "loop",
            perPage: 3,
            pagination: 0,
            arrowPaths: "m7.61 0.807-2.12...",
            arrows: 2,
            breakpoints: {
              700: {
                perPage: 2,
              },
              400: {
                perPage: 1,
              },
            },
            rewind: true,
            gap: "1rem",
          }}
        >
          {data.map((blog, index) => {
            const assetId = blog.image.sys.id; // Extract the asset ID
            const imageUrl = `https://cdn.contentful.com/assets/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/${assetId}`;
            return (
              <SplideSlide key={index}>
                <NewsCard  data={blog} image={imageUrl} key={index}/>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>

      <Link
        href="/blog"
        className="block text-center mt-10 text-white bg-gold focus:ring-black w-fit px-8 py-2 mx-auto rounded5 shadow-sm cursor-pointer border border-transparent hover:border hover:border-gold transition-all hover:bg-white hover:text-gold"
      >
        See all
      </Link>
    </section>
  );
};

export default News;
