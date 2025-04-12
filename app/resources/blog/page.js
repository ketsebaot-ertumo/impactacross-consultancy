"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { getAllBlog } from "../../lib/api";
import { notFound } from "next/navigation";

export default function Blogs() {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(2);

    useEffect(() => {
        const loadBlogs = async () => {
        try {
            const response = await getAllBlog(currentPage, pageSize);
            if (response.data?.length) {
            setResources(response.data);
            setTotalPages(response.pagination.totalPages);
            setCurrentPage(response.pagination.page);
            }
        } catch (err) {
            setError("Could not load blog data.");
        } finally {
            setLoading(false);
        }
        };
        loadBlogs();
    }, [currentPage, pageSize]);

    const handlePagination = (page) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };

    if(error || !resources){
       return notFound();
    }

    return (
        <>
            <Header />
                <main className="max-w-6xl mx-auto px-4 py-20 text-gray-900">
                    <h1 className="text-4xl font-semibold text-center mb-20">
                        📚 Blog Timeline
                    </h1>

                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <p className="text-red-600 text-center">{error}</p>
                    ) : (
                        <div className="space-y-24">
                            {resources.map((blog, index) => (
                            <Link
                                key={blog.id}
                                href={`/resources/${blog.name}/${blog.id}`}
                                className={`relative flex flex-col md:flex-row items-center ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } group hover:scale-[1.01] transition-transform`}
                            >
                                <div className="md:w-1/2 w-full overflow-hidden rounded-3xl shadow-xl relative h-[100px] sm:h-[300px]">
                                <Image
                                    src={blog.imageURL}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-300"
                                />
                                </div>

                                <div className="md:w-1/2 w-full mt-8 md:mt-0 md:px-12 text-center md:text-left">
                                    <h2 className="line-clamp-2 text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-700 text-lg line-clamp-3">{blog.content}</p>
                                    <div className="mt-6">
                                        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                                            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                                                year: "numeric", month: "long", day: "numeric",
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination & Controls */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 border-t pt-8">
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handlePagination(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-md font-medium transition ${
                                currentPage === 1
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                            >
                                Previous
                            </button>

                            <span className="text-gray-700 font-medium">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={() => handlePagination(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-md font-medium transition ${
                                currentPage === totalPages
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                            >
                                Next
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <label htmlFor="pageSize" className="text-gray-700">
                                Show:
                            </label>
                            <select
                                id="pageSize"
                                value={pageSize}
                                onChange={(e) => {
                                setPageSize(Number(e.target.value));
                                setCurrentPage(1);
                                }}
                                className="border border-gray-300 rounded px-3 py-1 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {[2, 5, 10, 25].map((size) => (
                                <option key={size} value={size}>
                                    {size} posts
                                </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
     );
}
