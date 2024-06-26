import React, { useState, useEffect } from "react";
import {
  FaPencilAlt,
  FaStar,
  FaArrowUp,
  FaBeer,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../AuthContext";

type ForumPost = {
  _id: string;
  category: {
    _id: string;
    name: string;
  };
  title: string;
  content: string;
  author: {
    username: string;
    avatar: string;
    postsCount: number;
    votesCount: number;
    propertyAddress: string;
  };
  postedAt: string;
  replies: Reply[];
  votesCount: number;
  lastRepliedAt: string;
};

type Reply = {
  _id: string;
  author: {
    username: string;
    avatar: string;
    postsCount: number;
    votesCount: number;
    job: string;
    propertyAddress: string;
  };
  content: string;
  createdAt: string;
  votesCount: number;
};

const Forum: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<ForumPost | null>(null);
  const [newReply, setNewReply] = useState("");
  const { isLoggedIn, user, login } = useAuth();

  useEffect(() => {
    // Fetch the forum post and its replies from the backend
    axios
      .get(`http://localhost:5000/api/forum/${id}`)
      .then((response) => {
        const sortedReplies = response.data.replies.sort(
          (a: Reply, b: Reply) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPost({ ...response.data, replies: sortedReplies });
      })
      .catch((error) => {
        console.error("There was an error fetching the forum post!", error);
      });
  }, [id]);

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReply.trim()) return;
    axios
      .post(
        `http://localhost:5000/api/forum/${id}/replies`,
        {
          content: newReply,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((response) => {
        setPost(response.data);
        setNewReply("");
      })
      .catch((error) => {
        console.error("There was an error posting the reply!", error);
      });
  };

  if (!post) return <div>Loading...</div>;

  const handleUpvotePost = () => {
    axios
      .post(
        `http://localhost:5000/api/forum/${id}/upvote`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((response) => {
        setPost(response.data);
        toast.success("Post upvoted successfully!");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        } else if (error.response.status === 401) {
          toast.error("You need to be logged in to upvote.");
        } else {
          toast.error("There was an error upvoting the post!");
        }
      });
  };

  const handleUpvoteReply = (postId: string, replyId: string) => {
    axios
      .post(
        `http://localhost:5000/api/forum/${postId}/replies/${replyId}/upvote`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((response) => {
        setPost(response.data);
        toast.success("Reply upvoted successfully!");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        } else if (error.response.status === 401) {
          toast.error("You need to be logged in to upvote.");
        } else {
          toast.error("There was an error upvoting the reply!");
        }
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Forum Detail</h2>
      <div className="grid grid-cols-12 gap-4 border">
        <div className="col-span-2 bg-gray-100 p-3">
          <div className="avatar flex justify-center">
            <img
              alt="avatar"
              style={{ borderRadius: "100px", width: "50px", height: "50px" }}
              className="rounded-lg"
              src={post.author.avatar}
            ></img>
          </div>
          <div className="flex justify-center text-gray-400">User Stats</div>
          <div className="flex justify-center text-blue-400 font-bold my-0 py-0">
            {post.author.postsCount}
          </div>
          <div className="flex justify-center text-blue-400 font-bold my-0 py-0">
            Posts
          </div>
          <div className="flex justify-center text-gray-500 font-semibold my-0 py-0">
            {post.author.votesCount}
          </div>
          <div className="flex justify-center text-gray-400 my-0 py-0">
            Votes
          </div>
        </div>
        <div className="col-span-10">
          <div className="rounded px-6 pt-4 pb-6 mb-4">
            <h3 className="text-gray-500">{post.category.name}</h3>
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <div className="grid grid-cols-12 gap-4 tail-flex">
              <span className="col-span-2 tail-w">{post.author.username}</span>
              <div className="col-span-3  tail-w grid grid-cols-12 gap-4 mr-8 items-center mb-4">
                <span className="col-span-1 text-sm  mx-0 text-blue-400">
                  <FaPencilAlt />
                </span>
                <Link className="col-span-5" to="poster">
                  {" "}
                  <span className="text-blue-400 font-bold text-sm">
                    {" "}
                    POSTER
                  </span>
                </Link>
                <span className="col-span-1 text-sm  mx-0 text-yellow-400">
                  <FaStar />
                </span>
                <Link className="col-span-5" to="poster">
                  {" "}
                  <span className="text-yellow-400 font-bold text-sm">
                    {" "}
                    PREMIUM
                  </span>
                </Link>
              </div>
            </div>
            <span>
              Posted{" "}
              {formatDistanceToNow(new Date(post.postedAt), {
                addSuffix: true,
              })}
            </span>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <hr className="border-t border-gray-300 my-2" />
            <div className="eval flex items-center justify-between">
              <div className="flex items-center mt-2">
                <span className="flex items-center text-gray-500 mr-4">
                  <FaArrowUp className="mr-1" />
                  {post.votesCount} Votes
                </span>
                <span className="flex items-center text-gray-500">
                  <FaEnvelope className="mr-1" />
                  {post.replies.length} Replies
                </span>
              </div>
              <button
                className="bg-white text-blue-600 border p-1 px-5 text-sm"
                onClick={handleUpvotePost}
              >
                Upvote
              </button>
            </div>
          </div>
        </div>
      </div>
      {post.replies.map((reply) => (
        <div key={reply._id} className="grid grid-cols-12 gap-4 mt-2 border">
          <div className="col-span-2 bg-gray-100 p-3">
            <div className="avatar flex justify-center">
              <img
                alt="avatar"
                style={{
                  borderRadius: "100px",
                  width: "50px",
                  height: "50px",
                }}
                className="rounded-lg "
                src={reply.author.avatar}
              ></img>
            </div>
            <div className="flex justify-center text-gray-400">User Stats</div>
            <div className="flex justify-center text-blue-400 font-bold my-0 py-0">
              {reply.author.postsCount}
            </div>
            <div className="flex justify-center text-blue-400 font-bold my-0 py-0">
              Posts
            </div>
            <div className="flex justify-center text-gray-500 font-semibold my-0 py-0">
              {reply.author.votesCount}
            </div>
            <div className="flex justify-center text-gray-400 my-0 py-0">
              Votes
            </div>
          </div>
          <div className="col-span-10 tail-p-5">
            <div className="rounded px-6 pt-4 pb-6 mb-4">
              <h3 className="text-gray-500">{reply.author.username}</h3>
              <div className="text-gray-900 mb-4">
                Posted{" "}
                {formatDistanceToNow(new Date(reply.createdAt), {
                  addSuffix: true,
                })}
              </div>
              <p className="text-gray-600">{reply.content}</p>
              <hr className="border-t border-gray-300 my-2" />

              <div className="eval flex items-center justify-between">
                <div className="flex items-center mt-2">
                  <span className="flex items-center text-gray-500 mr-4">
                    <FaArrowUp className="mr-1" />
                    {reply.votesCount} Votes
                  </span>
                </div>
                <button
                  className="bg-white text-blue-600 border p-1 px-5 text-sm"
                  onClick={() => handleUpvoteReply(post._id, reply._id)}
                >
                  Upvote
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
      {isLoggedIn && (
        <form onSubmit={handleReplySubmit} className="mt-4">
          <textarea
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Add a reply"
            className="border p-2 rounded w-full h-40"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-2"
          >
            Post Reply
          </button>
        </form>
      )}
    </div>
  );
};

export default Forum;
