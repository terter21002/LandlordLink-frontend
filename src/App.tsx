import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/_commons/Layout.component';
import NotFound from './pages/NotFound.page';
import Home from './pages/posts';
import CreatePost from './pages/posts/CreatePost';
import UpdatePost from './pages/posts/UpdatePost';
import Forum from './pages/forums/forum';
import Forums from './pages/forums';
import Blogs from './pages/blogs';
import Blog from './pages/blogs/blog';
import Services from './pages/services';
import Contact from './pages/contact';
import Portal from './pages/portal';
import News from './pages/news';

import About from './pages/about';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/posts/create' element={<CreatePost />} />
          <Route path='/posts/update' element={<UpdatePost />} />
          <Route path='/forums' element={<Forums posts={[]}/>} />
          <Route path="/forums/:forum" element={<Forum title="title"/>} />
          <Route path='/about' element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/blog_detail" element={<Blog title="title" content="content" date="date" author="author"/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={< Contact />} />
          <Route path='/portal' element={<Portal />} />
          <Route path='/news' element={<News news={[]}/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
