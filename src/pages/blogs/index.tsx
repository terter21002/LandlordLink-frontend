import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import axios from "axios";
import { Blog } from "../../types/blog";
import PrivateRoute from "../../PrivateRoute";
import { useAuth } from "../../AuthContext";
import { formatDistanceToNow } from "date-fns";
import { ToastContainer } from "react-toastify";

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => {
        const sortedBlogs = response.data.sort(
          (a: Blog, b: Blog) =>
            new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
        );
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs!", error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-8 ">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        {isLoggedIn && (
          <Link
            to="/blogs/create-blog"
            className="bg-blue-500 hover:bg-gray-500 text-white p-2 rounded"
          >
            Create Blog
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-500">
        {blogs.map((blog) => (
          <div className="bg-white rounded-md" key={blog._id}>
            <img className="h-60 w-full" src={blog.image} alt={blog.title} />
            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-200 text-blue-500 text-sm p-1">
                {blog.category.name}
              </button>
              {/* <span>{Math.ceil(blog.content.length / 200)} min read</span> */}
            </div>
            <div className="flex items-center flex-start text-gray-800 mt-4">
              <div className="flex items-center">
                <img
                  className="inline"
                  style={{
                    borderRadius: "100px",
                    width: "50px",
                    height: "50px",
                  }}
                  alt="avatar"
                  src={blog.author.avatar}
                />
                <span className="ml-5">
                  Posted{" "}
                  {formatDistanceToNow(new Date(blog.postedAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              <span className="text-blue-500 ml-6">
                <Link to={`/author/${blog.author._id}`}>
                  {blog.author.username}
                </Link>
              </span>
            </div>
            <h1 className="font-bold text-lg hover:text-blue-800 cursor-pointer">
              <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
            </h1>
            {/* <h2>{blog.content.substring(0, 100)}...</h2> */}
            <h2
              dangerouslySetInnerHTML={{
                __html: `${blog.content.substring(0, 150)}...`,
              }}
            />
            <div className="mt-3 grid grid-cols-12 items-center gap-4">
              <div className="col-span-1">
                <TiMessages />
              </div>
              <div className="col-span-2 ml-1">{blog.commentsCount}</div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogPage;
