"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResourceCard from "../components/ResourceCard";
import { fetchLatestBlog } from "../lib/api";

export default function ResourceGrid() {
  const [resources, setResources] = useState([
    {
      id: 2,
      name: "Publications",
      image: "/home.jpg",
      title: "New Publications",
      content:
        "Tips and strategies for improving your web application's performance using built-in tools and code-splitting.",
    },
    {
      id: 3,
      name: "Multimedia",
      image: "/home.jpg",
      title: "New Multimedia",
      content:
        "Tips and strategies for improving your web application's performance using built-in tools and code-splitting.",
    },
    {
      id: 4,
      name: "Trainings",
      image: "/home.jpg",
      title: "New Trainings",
      content:
        "Tips and strategies for improving your web application's performance using built-in tools and code-splitting.",
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blog = await fetchLatestBlog();

        if (blog) {
          const blogResource = {
            id: blog.id,
            name: blog.name,
            image: blog.imageURL,
            title: blog.title || "Latest Blog",
            content: blog.content || "Read our latest blog post.",
          };

          setResources((prev) => [blogResource, ...prev]);
        }
      } catch (err) {
        console.warn("No valid blog returned.");
        setError("Could not load blog data.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <>
        <Header/>

        <div className="relative">
            <img 
                src="/home.jpg"
                alt="Consultancy Services"
                className="w-full h-90 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 w-full"></div>
            <div className="absolute inset-0 flex items-center max-w-6xl mx-auto pl-8 lg:pl-0">
                <div className="text-white text-2xl md:text-4xl font-bold border-b pb-4">
                    Resources
                </div>
            </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center text-gray-800 pb-4">Our Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {resources.map((item) => (
                    <ResourceCard key={item.id} {...item} />
                ))}
            </div>
        </section>

        <Footer/>
    </>
  );
}





{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {resources.map((item) => (
    <div key={item.id} className="h-full">
      <ResourceCard {...item} />
    </div>
  ))}
</div> */}


