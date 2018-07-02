import React from 'react';
import Posts from './components/posts/posts.jsx';
import Navbar from '../navbar/navbar';
import BlogHeading from './blogHeading';
import InputPost from './inputPost'

const Blog = () =>
    <div>
        <Navbar />
        <BlogHeading />
        <InputPost />
        <Posts />
    </div>


export default Blog