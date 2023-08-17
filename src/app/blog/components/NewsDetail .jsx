import React from "react";
import Image from "next/image";
import Loading from "../../../components/Loading";
import ReactMarkdown from "react-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Book from "@/components/Book";
import { Breadcrumbs } from "@material-tailwind/react";
import { HiOutlineHome } from "react-icons/hi";
import Link from "next/link";

const NewsDetail = ({ data }) => {
  console.log(data);
  if (!data) {
    return <Loading />;
  }

  const imageUrl = `https://cdn.contentful.com/assets/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/${data.image.sys.id}`;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri}>{children}</a>
      ),
    },
  };

  const blogContent = data.blog && data.blog.content;

  return (
    <>
      {data && (
        <div className="bg-white min-h-screen">

          <div className="h-[50vh]  xl:h-[600px]">
            <img
              className="h-full w-full object-cover"
              src={data.image.fields.file.url}
              alt=""
            />
          </div>
          <div className="center py-[70px]">


          <Breadcrumbs className='bg-gold text-white'>
       <Link href="/" className="opacity-60">
         <HiOutlineHome className='text-white font-bold text-xl'/>
       </Link>
       
       <Link href='/blog' className='text-white'>News</Link>
       <div className='text-white'>{data.title}</div>
     </Breadcrumbs>

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.shortDescription}
            </p>

            <div className="prose lg:prose-xl">
              {blogContent &&
                blogContent.map((node, index) =>
                  documentToReactComponents(node, options)
                )}
            </div>
          </div>

          </div>

          <Book/>
        </div>
      )}
    </>
  );
};

export default NewsDetail;
