import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Category {
  _id: string;
  name: string;
}

const NewForum: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      title,
      content,
      category,
    };
    try {
      console.log(data);
      await axios.post("http://localhost:5000/api/forum", data, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      toast.success("Forum created successfully!");
      navigate("/forums");
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        toast.error("You need to log in to create a forum.");
      } else {
        console.error("There was an error creating the forum!", error);
        toast.error("Failed to create forum");
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <ToastContainer />
      <h1 className="text-3xl font-bold my-8">Create a New Forum</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          className="shadow appearance-none text-gray-700 h-64 pb-10"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        >
          Create Forum
        </button>
      </form>
    </div>
  );
};

export default NewForum;
