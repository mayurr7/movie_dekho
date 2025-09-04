import React from "react";
import { Form } from "react-router-dom";

 export const handleContactform = async({request}) => {
       try {
        const formData = await request.formData();
        console.log(Object.fromEntries(formData));
        return null;
        
       } catch (error) {
        console.log(error);
        
       }
        
    };
const Contact = () => {
   
  return (
    <>
      <div className="container mx-auto px-4 py-10 bg-gray-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Contact Page</h1>
          <p className="text-gray-600 mb-6">
            This is the Contact page of the Movie Dekho application. If you have
            any questions, suggestions, or feedback, feel free to reach out to us!
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8">
          <Form method="post" className="space-y-6" action="/contact">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
