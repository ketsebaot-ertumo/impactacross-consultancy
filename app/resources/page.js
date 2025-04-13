"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResourceCard from "../components/ResourceCard";
import { getLatestBlogPost, getLatestMultimedia, getLatestPublication, getLatestTraining } from "../lib/api";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function ResourceGrid() {
  // const [resources, setResources] = useState([
  //   {
  //     id: 3,
  //     name: "Multimedias",
  //     image: "/home.jpg",
  //     title: "New Multimedia",
  //     content:
  //       "Tips and strategies for improving your web application's performance using built-in tools and code-splitting.",
  //   },
  //   {
  //     id: 4,
  //     name: "Trainings",
  //     image: "/home.jpg",
  //     title: "New Trainings",
  //     content:
  //       "Tips and strategies for improving your web application's performance using built-in tools and code-splitting.",
  //   },
  // ]);

  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const latestBlog = await getLatestBlogPost();

        if ( latestBlog?.success ) {
          const blog = latestBlog.data
          setResources((prev) => {
            const exists = prev.some((r) => r.id === blog.id);
            return exists ? prev : [blog, ...prev];
          });
          
        } else{
          toast.error('No valid blog post returned.');
        }
      } catch (err) {
        toast.error('Could not load blog data.');
        console.error("Could not load blog data:" + err.message);
        setError("Could not load blog data.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const latestPost = await getLatestPublication();

        if ( latestPost?.success ) {
          const publication = latestPost.data
          setResources((prev) => {
            const exists = prev.some((r) => r.id === publication.id);
            return exists ? prev : [publication, ...prev];
          });
        } else{
          toast.error('No valid publication post returned.');
        }
      } catch (err) {
        toast.error('Could not load post data.');
        console.warn("Could not load post data:" + err.message);
        setError("Could not load post data.");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, []);

  
  useEffect(() => {
    const loadPost = async () => {
      try {
        const latestPost = await getLatestMultimedia();

        if ( latestPost?.success ) {
          const post = latestPost.data
          const multimediaResource = {
            id: post.id,
            name: post.name,
            content: post.content,
          };
      
          setResources((prev) => {
            const exists = prev.some((r) => r.id === post.id);
            return exists ? prev : [post, ...prev];
          });
        } else{
          toast.error('No valid multimedia post returned.');
        }
      } catch (err) {
        toast.error('Could not load multimedia post data.');
        console.warn("Could not load multimedia post data:" +err.message);
        setError("Could not load multimedia post data.");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, []);

  
  useEffect(() => {
    const loadTrainingPost = async () => {
      try {
        const latestPost = await getLatestTraining();

        if ( latestPost?.success ) {
          const training = latestPost.data
          setResources((prev) => {
            const exists = prev.some((r) => r.id === training.id);
            return exists ? prev : [training, ...prev];
          });
        } else{
          toast.error('No valid multimedia post returned.');
        }
      } catch (err) {
          toast.error('Could not load training post data.');
          console.warn("Could not load training post data:" + err.message);
          setError("Could not load training post data.");
      } finally {
        setLoading(false);
      }
    };
    loadTrainingPost();
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

        {loading ? (
            <Loader />
        ) : (
            resources.length === 0 ? (
                <main className="container max-w-6xl mx-auto px-6 py-12 text-center text-gray-500 py-36">
                    <h1 className="text-4xl font-bold mb-6">📚 Services</h1>
                    <p className="text-lg">No Services found.</p>
                </main>
            ) : (
                <div>
                  <section className="max-w-6xl mx-auto px-6 py-12">
                      <h2 className="text-4xl font-bold text-center text-gray-800 pb-12">Our Resources</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {resources.map((item) => (
                          <div key={item.id} className="h-full">
                            <ResourceCard {...item} />
                          </div>
                        ))}
                      </div>
                      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          {resources.map((item) => (
                              <ResourceCard key={item.id} {...item} />
                          ))}
                      </div> */}
                  </section>
                </div>
            ))}
          <Footer/>
    </>
  );
}
