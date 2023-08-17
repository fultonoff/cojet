"use client";

import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { createClient } from "contentful";
import NewsCard from "../../../components/NewsCard";
import LoadingData from '../../../components/LoadingData'

const AllNews = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      });

      const response = await client.getEntries({ content_type: "blogPost" });
      const items = response.items;
      setBlogs(items);
    }

    fetchData();
  }, []);

  if (blogs.length === 0) {
    return <LoadingData />;
  }

  const data = blogs.map((item) => item.fields);

  return (
    <section className="w-full py-[70px]">
      <div className="center">
        <Breadcrumbs className="bg-gold text-white">
          <Link href="/" className="opacity-60">
            <HiOutlineHome className="text-white font-bold text-xl" />
          </Link>

          <div className="text-white">News</div>
        </Breadcrumbs>

        <div>
          <h1 className="text-[38px] mt-10 mb-5">Latest news</h1>

          <div className="grid gap-4 grid-cols1 sm:grid-cols-2">
            {data.map((blog, index) => {
              const assetId = blog.image.sys.id; // Extract the asset ID
              console.log(blog.slug);
              const imageUrl = `https://cdn.contentful.com/assets/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/${assetId}`;
              return (
                <div key={index}>
                  <NewsCard data={blog} image={imageUrl} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllNews;
