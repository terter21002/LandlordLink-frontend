import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { Category as CategoryType } from "../../types/blog";

const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");
  const [editingCategory, setEditingCategory] = useState<CategoryType | null>(
    null
  );
  const { isLoggedIn, user, login } = useAuth();

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

  const createCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    const endpoint = editingCategory
      ? `http://localhost:5000/api/category/${editingCategory._id}`
      : "http://localhost:5000/api/category";

    const method = editingCategory ? "put" : "post";

    axios({
      method,
      url: endpoint,
      data: {
        name: categoryName,
      },
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    })
      .then((response) => {
        if (editingCategory) {
          setCategories(
            categories.map((cat) =>
              cat._id === editingCategory._id ? response.data : cat
            )
          );
        } else {
          setCategories([...categories, response.data]);
        }
        setCategoryName("");
        setEditingCategory(null);
      })
      .catch((error) => {
        console.error("There was an error posting the category!", error);
      });
  };

  const deleteCategory = (id: string) => {
    axios
      .delete(`http://localhost:5000/api/category/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then(() => {
        setCategories(categories.filter((category) => category._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the category!", error);
      });
  };

  const startEditing = (category: CategoryType) => {
    setCategoryName(category.name);
    setEditingCategory(category);
  };

  // if (!categories.length) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-bold text-center my-6">
        Categories
      </h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={createCategorySubmit} className="mb-4">
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category Name"
            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-blue-500 hover:bg-gray-500 rounded"
          >
            {editingCategory ? "Update Category" : "Create Category"}
          </button>
        </form>
        <ul>
          {categories.map((category) => (
            <li
              key={category._id}
              className="flex items-center justify-between mb-2"
            >
              <span>{category.name}</span>
              <div>
                <button
                  onClick={() => startEditing(category)}
                  className="px-2 py-1 mr-2 text-white bg-yellow-500 hover:bg-yellow-700 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCategory(category._id)}
                  className="px-2 py-1 text-white bg-red-500 hover:bg-red-700 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
