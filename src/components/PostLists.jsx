import React from "react";
import { BlogPosts } from "../constants/BlogPosts";
import { Link } from "react-router-dom";

const PostLists = () => {
    return (
        <ul>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/posts/${slug}`}>
                        <h3>{title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default PostLists;
