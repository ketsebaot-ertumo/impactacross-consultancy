"use client";

import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
// import { fetchSingleBlogPost } from "../../../lib/blog";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loader from "../../../components/Loader";

export default function BlogDetails() {
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const loadBlog = async () => {
        try {
            const blog = await getSingleBlogPost(id);
            if (blog) {
            setBlog({
                // blog
                id: blog.id,
                name: blog.name,
                image: blog.imageURL,
                title: blog.title || "Latest Blog",
                content: blog.content || "Read our latest blog post.",
            });
            }
        } catch (err) {
            console.error(err);
            setError("Could not load blog data.");
        } finally {
            setLoading(false);
        }
        };

        loadBlog();
    }, [id]);

    if (loading) return <Loader />;
    if(error || !blog || !blog?.id){
        return notFound();
    }

    return (
        <>
            <Header />

            <section className="relative min-h-[60vh] w-full flex items-center justify-center bg-gray-900 overflow-hidden">
                <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover opacity-30 blur-sm"
                />
                <div className="z-10 text-center px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">{blog.title}</h1>
                </div>
            </section>

            <section className="max-w-4xl mx-auto -mt-20 px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 md:p-12">
                <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                    <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center"
                    />
                </div>

                <article className="prose lg:prose-xl prose-gray max-w-none text-gray-800">
                    <p>{blog.content}</p>
                </article>
                </div>
            </section>

            <Footer />
        </>
    );
}
