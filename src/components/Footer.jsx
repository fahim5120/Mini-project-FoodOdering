import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full" >
      <div className="w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-10" id="footer">
        
        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-300 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Company</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Delivery</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Get In Touch</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">+91 8136905120</li>
            <li className="hover:text-white cursor-pointer">chef</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Chef.com . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
