'use client'

import React from 'react'
import { useRouter } from "next/navigation";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import NewsDetail from '../components/NewsDetail '

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const DetailPage = ({ params }) => {
  const slug = params.slug;
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          'fields.slug': slug,
        });

        if (response.items.length > 0) {
          const newsData = response.items[0].fields;
          setNews(newsData);
        } else {
          setNews(null);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews(null);
      }
    };

    if (slug) {
      fetchNews();
    }
  }, [slug]);

  return <NewsDetail data={news} />;
};

export default DetailPage;

