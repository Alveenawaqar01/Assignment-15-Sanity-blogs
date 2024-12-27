import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sanity Blog . All rights reserved.
        </p>
        <div className="mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 mx-2">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 mx-2">
            GitHub
          </a>
          <a href="/privacy-policy" className="text-gray-400 hover:text-gray-600 mx-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
