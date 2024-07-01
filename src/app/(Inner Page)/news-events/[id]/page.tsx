"use client";
import BlogDetailSection from "@/webComponents/blog/BlogDetailSection";
import BreadcrumbSection from "@/webComponents/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/webComponents/error/ErrorSection";
import InnerLayout from "@/webComponents/layout/InnerLayout";
import { Metadata } from "next";
import endpoint from "../../../../context/endpoint";
import React, { useEffect, useState } from "react";

interface Blog {
  id: number;
  img: string;
  display_date: string;
  comments: number;
  title: string;
  placeby: string
  content: string
}

export default function Home({ params }: { params: { id: number } }) {
  const [data, setData] = useState<Blog | null>(null);
  const [allNews, setAllNews] = useState<Blog[]>([]);


  console.log('====================================');
  console.log(params);
  console.log('====================================');

  const getData = async () => {
    try {
      const res = await endpoint.get(`/${params.id}/news-detail`);
      console.log('================news====================');
      console.log(res.data.data.news[0]);
      console.log('====================================');
      setData(res.data.data.news[0]);
    } catch (err) {
      console.log(err);
    }
  };
   const getAllNews = async () => {
    try {
      const res = await endpoint.get("/news");
      console.log('================news====================');
      console.log(res.data.data.getNews);
      console.log('====================================');

      if (Array.isArray(res.data.data.getNews)) {
        setAllNews(res.data.data.getNews);
      } else {
        console.error("API response is not an array");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getAllNews();
  }, [params.id]);

  return (
    <main className="rv-14-home">
      <InnerLayout>
        {data ? (
          <>
            <BreadcrumbSection title="News Details" />
            <BlogDetailSection data={data} allNews={ allNews} />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}
