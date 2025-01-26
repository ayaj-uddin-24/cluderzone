import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {/* Title and Event Info */}
        <div className="mb-8">
          <h4 className="text-2xl font-semibold" aria-label="Event Name">
            TechCluder Community Event
          </h4>
          <p className="text-sm pt-2" aria-label="Event Location and Date">
            Chattogram Polytechnic Institute | February 2025
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8" aria-label="Footer navigation">
          <ul className="flex justify-center space-x-8 text-sm font-medium">
            {["Home", "About", "Blogs", "Registration"].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="hover:text-gray-400 transition-colors"
                  aria-label={`Navigate to ${link}`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="mb-8">
          <ul
            className="flex justify-center space-x-6 text-gray-400"
            aria-label="Social media links"
          >
            {[
              {
                icon: FaFacebook,
                link: "https://facebook.com",
                label: "Facebook",
              },
              {
                icon: FaTwitter,
                link: "https://twitter.com",
                label: "Twitter",
              },
              {
                icon: FaInstagram,
                link: "https://instagram.com",
                label: "Instagram",
              },
              {
                icon: FaLinkedin,
                link: "https://linkedin.com",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, link, label }) => (
              <li key={label}>
                <a
                  href={link}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                >
                  <Icon size={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright Info */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">TechCluder</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
