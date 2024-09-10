import React, { useState } from 'react';

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-10 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">

        <h1 className="mb-4 text-2xl font-bold text-gray-700">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-600 ">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none "
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}

export default ContactUsPage;
