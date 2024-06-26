import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/_commons/Layout.component";
import NotFound from "./pages/NotFound.page";
import Home from "./pages/posts";
import CreatePost from "./pages/posts/CreatePost";
import UpdatePost from "./pages/posts/UpdatePost";
import Forum from "./pages/forums/forum";
import NewForum from "./pages/forums/new_forum";
import Forums from "./pages/forums";
import Blogs from "./pages/blogs";
import Blog from "./pages/blogs/blog";
import CreateBlog from "./pages/blogs/createBlog";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Portal from "./pages/portal";
import News from "./pages/news";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";

import About from "./pages/about";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/posts/update" element={<UpdatePost />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/new_forum" element={<NewForum />} />
            <Route path="/forums/:id" element={<Forum />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/blogs/create-blog" element={<CreateBlog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
