import React from 'react';
import Navbar
 from './Navbar';
 import Footer from './Footer';
export default function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-900 text-gray-400 flex flex-col items-center p-10 mt-16">
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to BookStore, your number one source for all kinds of books. We're dedicated to providing you the very best of books, with an emphasis on variety, affordability, and a user-friendly shopping experience.
        </p>
        <p className="mb-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to make reading accessible and enjoyable for everyone. We strive to offer a vast selection of books at competitive prices and ensure a seamless shopping experience for our customers.
        </p>
        <h2 className="text-2xl font-bold text-white mb-2">Our Team</h2>
        <p className="mb-4">
          Our team is made up of book enthusiasts and dedicated professionals who are always ready to help you find the perfect book. We believe in the power of books to educate, entertain, and inspire, and we work hard to bring that power to you.
        </p>
        <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
        <p>
          Have any questions? Reach out to us at <a href="mailto:contact@bookhaven.com" className="text-indigo-400">contact@boostore.com</a>.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
