import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GoArrowRight,
  GoBook,
  GoCrossReference,
  GoClock,
} from "react-icons/go";
import axios from "axios";
import { Blog as BlogType, Comment as CommentType } from "../../types/blog";
import { useAuth } from "../../AuthContext";
import { formatDistanceToNow } from "date-fns";

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [newComment, setNewComment] = useState("");
  const { isLoggedIn, user, login } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        const sortedComments = response.data.comments.sort(
          (a: CommentType, b: CommentType) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setBlog({ ...response.data, comments: sortedComments });
      })
      .catch((error) => {
        console.error("There was an error fetching the blog!", error);
      });
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    axios
      .post(
        `http://localhost:5000/api/blogs/${id}/comments`,
        {
          content: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((response) => {
        setBlog(response.data);
        setNewComment("");
      })
      .catch((error) => {
        console.error("There was an error posting the comment!", error);
      });
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-bold text-center my-6">
        Blog Page
      </h1>
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-12 gap-4 tail-flex">
        <div className="col-span-8 flex justify-center tail-w">
          <div>
            <div className="mx-auto flex items-center">
              Home <GoArrowRight className="ml-3" /> Blog{" "}
              <GoArrowRight className="mx-2" /> {blog.category.name}
            </div>
            <div className="mt-4">
              <h1 className="text-gray-700 text-lg font-bold">{blog.title}</h1>
              <div className="flex items-center mt-4 text-gray-600">
                <GoBook />{" "}
                <span className="mx-3">
                  {new Date(blog.postedAt).toDateString()}
                </span>
                <GoClock className="ml-3" />{" "}
                <span className="ml-1">
                  {Math.ceil(blog.content.length / 200)} min read
                </span>
                <GoCrossReference className="ml-3" />
                <span className="ml-1">Share</span>
              </div>
              <img
                className="h-60 w-full mt-4"
                src={blog.image}
                alt={blog.title}
              />
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
        </div>
        <div className="col-span-4 flex mx-auto">
          <div>
            <div className="flex justify-between items-center">
              <img
                alt="avatar"
                style={{ borderRadius: "100px", width: "50px", height: "50px" }}
                className="rounded-lg"
                src={blog.author.avatar}
              />
              <div className="ml-2">
                <span className="text-blue-400">{blog.author.username}</span>
                <h3>{blog.author.job}</h3>
                <h3>{blog.author.summary}</h3>
              </div>
              <div className="text-red-600">Blog Author</div>
            </div>
            <div>
              {blog.author.summary}
              <span className="text-blue-400 ml-3">View Detail</span>
            </div>
            <div>
              <img
                className="h-80 w-full mt-4"
                src={blog.image}
                alt={blog.title}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        {isLoggedIn && (
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
              className="border p-2 rounded w-full h-40"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-2"
            >
              Post Comment
            </button>
          </form>
        )}
        <h2 className="text-2xl font-bold pt-6">Comments</h2>
        {blog.comments.map((comment) => (
          <div key={comment._id} className="border p-4 rounded mt-4">
            <div className="flex items-center">
              <img
                className="inline"
                style={{ borderRadius: "100px", width: "50px", height: "50px" }}
                alt="avatar"
                src={comment.commentAuthor.avatar}
              />
              <div className="ml-3">
                <span className="text-blue-400">
                  {comment.commentAuthor.username}
                </span>
                <p>
                  Posted{" "}
                  {formatDistanceToNow(new Date(comment.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
            <p className="mt-2">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
