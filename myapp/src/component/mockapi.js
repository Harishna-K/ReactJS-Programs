import React, { useState } from 'react';
import axios from 'axios';
import './mockapi.css'

const PostDataForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    img: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://65b37d39770d43aba479dd0e.mockapi.io/books', formData);
      console.log('Data posted successfully:', response.data);
      // You can handle success, redirect, or any other action here
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error scenarios here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image URL:
               <input type="file" accept="image/*" name="img" onChange={handleChange} />

      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    
  );
};
export default PostDataForm;