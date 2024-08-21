import React, { useState } from 'react';

const Write = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && image) {
      const newBlog = { title, content, tags: tags.split(','), image };
      addBlog(newBlog);
      setTitle('');
      setContent('');
      setTags('');
      setImage('');
    } else {
      alert("Title, content, and image are required");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Write a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter the blog title"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            rows="5"
            placeholder="Write your blog content"
          ></textarea>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="e.g., React,JavaScript,CSS"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter the image URL"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
