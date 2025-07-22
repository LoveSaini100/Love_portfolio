import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-200 dark:bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Get in Touch
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-4 text-sm">
        {/* Email Card */}
        <div className="flex items-center gap-4 bg-gray-800 border-l-4 border-purple-500 rounded-lg px-6 py-4 shadow-md hover:shadow-purple-500/20 transition">
          <FaEnvelope className="text-purple-400 text-xl" />
          <span className="text-gray-200 break-all">sainilove910@gmail.com</span>
        </div>

        {/* Phone Card */}
        <div className="flex items-center gap-4 bg-gray-800 border-l-4 border-purple-500 rounded-lg px-6 py-4 shadow-md hover:shadow-purple-500/20 transition">
          <FaPhoneAlt className="text-purple-400 text-xl" />
          <span className="text-gray-200">+91 9528634480</span>
        </div>

        {/* Location Card */}
        <div className="flex items-center gap-4 bg-gray-800 border-l-4 border-purple-500 rounded-lg px-6 py-4 shadow-md hover:shadow-purple-500/20 transition">
          <FaMapMarkerAlt className="text-purple-400 text-xl" />
          <span className="text-gray-200">Roorkee, Uttarakhand, India</span>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-4 text-3xl">
              <a href="https://github.com/LoveSaini100" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/love-saini-b877aa277" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/love_saini_881/profilecard/?igsh=MWc2Y3I5bnU1ODhlMg==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919528634480" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <FaWhatsapp />
              </a>
        </div>
    </section>
  );
}
