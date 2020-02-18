import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {

    switch(action.type){
        case 'add_blopost':
            return [...state, {title: `Blog Post #${state.length + 1}`}]
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {
    
    const [blogPosts, dispath] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispath({type: 'add_blopost'});
    };

    return (
        <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
            { children }
        </BlogContext.Provider>);
};

export default BlogContext;
