import blogs from "../BlogData";
import { BlogPosts } from "../Components/BlogPosts";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Import Helmet

function Blog() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const renderBlogPreviews = () =>
    blogs.map((blog) => (
      <article key={blog.id} className="flex flex-col gap-5 space-y-3">
        <div className="relative flex-1 bg-gradient-to-b from-slate-500 to-gray-600">
          <figure>
            <img
              src={blog.image}
              alt={`blog-${blog.id}`}
              className="h-full w-full object-cover mix-blend-overlay"
            />
          </figure>
        </div>
        <div className="h-[10rem] w-full divide-y-2 divide-slate-500">
          <h5 className="font-poppins text-2xl font-bold text-black">
            {blog.title}
          </h5>
          <button
            onClick={() => {
              setTimeout(() => setSelectedBlog(blog), 600);
            }}
            aria-label='Read more about blog post'
            type="button"
            className="btn font-semibold transition-all delay-300 hover:text-white focus:ring-1 focus:ring-brandC"
          >
            Read More
          </button>
        </div>
      </article>
    ));

  if (isLoading)
    return <p className="text-xl font-semibold text-black">Loading...</p>;
  if (!blogs.length) return <p>No blogs found.</p>;

  return (
    <motion.section
      className="mt-[10rem] w-full bg-cardBg px-5 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>SolarPoint Blog - Insights and Updates</title>
        <meta
          name="description"
          content="Stay updated with our latest insights, stories, and news on solar energy solutions. Explore our blogs to learn more about the benefits of solar power."
        />
        <link rel="canonical" href="https://solarpointsystemsea.co.ke/blog" />
        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="SolarPoint Blog - Insights and Updates"
        />
        <meta
          property="og:description"
          content="Stay updated with our latest insights, stories, and news on solar energy solutions. Explore our blogs to learn more about the benefits of solar power."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solarpointsystemsea.co.ke/blog"
        />
        
      </Helmet>
      <div className="mx-auto mt-0 max-w-[1400px]">
        {selectedBlog === null ? (
          <div className="grid h-full w-full grid-cols-1 grid-rows-4 gap-5 ss:grid-cols-3 sm:grid-cols-4 sm:grid-rows-2">
            {renderBlogPreviews()}
          </div>
        ) : (
          <BlogPosts blog={selectedBlog} goBack={() => setSelectedBlog(null)} />
        )}
      </div>
    </motion.section>
  );
}

export default Blog;
