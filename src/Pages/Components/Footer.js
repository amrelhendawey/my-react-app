import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="/" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/products" className="hover:text-gray-400">Products</a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
