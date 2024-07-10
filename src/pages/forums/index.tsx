import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "../../AuthContext";

type ForumPost = {
  _id: string;
  title: string;
  author: {
    username: string;
    avatar: string;
    propertyAddress: string;
  };
  postedAt: string;
  replyCount: number;
  votesCount: number;
  lastRepliedAt: string;
};

const Forums: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [inputPage, setInputPage] = useState<string>("1");
  const postsPerPage = 3;
  const [totalPages, setTotalPages] = useState<number>(1);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    // Fetch posts from the backend
    axios
      .get("http://localhost:5000/api/forum")
      .then((response) => {
        const sortedForums = response.data.sort(
          (a: ForumPost, b: ForumPost) =>
            new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
        );
        setPosts(sortedForums);
        setTotalPages(Math.ceil(sortedForums.length / postsPerPage));
      })
      .catch((error) => {
        console.error("There was an error fetching the forum posts!", error);
      });
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    setInputPage(page.toString());
  };

  const handleGoClick = () => {
    const pageNumber = Number(inputPage);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Calculate the posts to be shown on the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Forum Posts
          <div className="flex flex-wrap items-center mt-5 tail-flex tail-end relative">
            <button className="sm:d-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full text-sm tail-none">
              Newest
            </button>
            <button className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-3 rounded-full text-sm ml-3 tail-none">
              Trending
            </button>
            <button className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-3 rounded-full text-sm ml-3 tail-none">
              Unanswered
            </button>
            <select className="hidden h-8 px-2 border rounded-md text-sm ml-6 tail-w tail-block">
              <option value="1">Newest</option>
              <option value="2">Trending</option>
              <option value="3">Unanswered</option>
            </select>
            <select className="block h-10 px-2 border rounded-md text-sm ml-6 tail-w">
              <option value="1">Any Location</option>
              <option value="2">New York</option>
              <option value="3">Los Angeles</option>
            </select>
            {isLoggedIn && (
              <button className="tail-m-2 tail-block tail-static hover:bg-gray-500 font-bold py-2 px-2 rounded text-sm tail-none absolute right-0 top-0 bg-blue-500 text-white">
                <Link to="/forums/new_forum">Post a New</Link>
              </button>
            )}
          </div>
        </h2>
        {currentPosts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded p-6 mb-4">
            <div className="grid grid-cols-12 gap-4 tail-flex">
              <span className="tail-w-2 col-span-2 grid grid-cols-2">
                <img
                  alt="avatar"
                  style={{
                    borderRadius: "100px",
                    width: "50px",
                    height: "50px",
                  }}
                  className="rounded-lg"
                  src={post.author.avatar}
                ></img>
              </span>
              <span className="tail-w-2 text-xl font-semibold mb-2 col-span-8 hover:text-blue-400">
                <Link to={`/forums/${post._id}`}>{post.title}</Link>
              </span>
              <span className="col-span-2 grid grid-cols-12">
                <span className="col-span-3 p-1">
                  <FaArrowUp />
                </span>
                <span className="col-span-3">{post.votesCount}</span>
                <span className="col-span-3 p-1">
                  <FaEnvelope />
                </span>
                <span className="col-span-3">{post.replyCount}</span>
              </span>
            </div>
            <p className="text-gray-600 grid grid-cols-12 gap-4 tail-flex">
              <span className="col-span-1 tail-w tail-w"></span>
              <span className="tail-w col-span-11 font-semibold tail-w">
                Author: {post.author.username}
              </span>
            </p>
            <p className="text-gray-600 grid grid-cols-12 gap-4 tail-flex">
              <span className="tail-w col-span-1"></span>
              <span className="tail-w col-span-6 font-semibold">
                {formatDistanceToNow(new Date(post.postedAt), {
                  addSuffix: true,
                })}{" "}
                | {post.author.propertyAddress}
              </span>
              <span className="tail-w col-span-2"></span>
              <div className="tail-w col-span-3">
                <span className="font-bold text-blue-900 ml-10">
                  Last Reply
                </span>{" "}
                by{" "}
                {formatDistanceToNow(new Date(post.lastRepliedAt), {
                  addSuffix: true,
                })}
              </div>
            </p>
          </div>
        ))}
        <div className="flex justify-center">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </div>
        <div className="flex justify-center mt-6">
          <input
            type="number"
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            className="border w-20 rounded-md p-2 h-8"
          />
          <button
            onClick={handleGoClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 ml-4 rounded text-sm"
          >
            Go
          </button>
        </div>
      </div>
    </>
  );
};

export default Forums;
