"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchAllBlog } from "../../lib/blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

export default function Blogs() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [total, setTotal] = useState(5);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetchAllBlog(currentPage, pageSize);
        if (response.data?.length) {
          setResources(response.data);
          setTotalPages(response.pagination.totalPages);
          setTotal(response.pagination.total);
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

    return (
        <>
            <Header />

            {loading ? (
                <Loader />
            ) : (
                <div>
                    <main className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
                        <h1 className="text-5xl font-bold text-center mb-12">📰 Blogs & News</h1>

                        {/* Blog Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {resources.map((blog) => (
                            <Link key={blog.id} href={`/resources/${blog.name}/${blog.id}`}>
                                <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                <Image
                                    src={blog?.imageURL}
                                    alt={blog?.title}
                                    width="500"
                                    height="300"
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {blog.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">{blog.content}</p>
                                    <span className="inline-block mt-4 text-sm text-blue-500 hover:underline">
                                    Read more →
                                    </span>
                                </div>
                                </div>
                            </Link>
                            ))}
                        </div>

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
                                {[3, 5, 10, 25].map((size) => (
                                <option key={size} value={size}>
                                    {size} posts
                                </option>
                                ))}
                            </select>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            )}
        </>
    );
}
