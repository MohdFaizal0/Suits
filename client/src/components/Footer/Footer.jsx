import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="hero container-fluid mt-5 py-5 px-5">
        <div className="container-fluid d-flex p-0">
          <div className="container-fluid d-flex p-0">
            <div className="container-fluid p-0">
              <p className="fs-5">Suits</p>
              <ul className="list-unstyled no-bullets">
                <li>
                  <Link to="help">Help</Link>
                </li>
                <li to="about">
                  <Link>About</Link>
                </li>
              </ul>
            </div>
            <div className="container-fluid p-0">
              <p className="fs-5">Our Services</p>
              <ul className="list-unstyled no-bullets">
                <li>
                  <Link to="/how-it-works">How it Works</Link>
                </li>
                <li>
                  <Link to="/fit-guarantee">
                    Custom Items: Our Fit Guarantee & Returns
                  </Link>
                </li>
                <li>
                  <Link to="/delivery">
                    Non-Custom Items: Delivery & Returns
                  </Link>
                </li>
                <li>
                  <Link to="/faq">Frequently Asked Questions</Link>
                </li>
                <li>
                  <Link to="/product-care">Product Care</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="container-fluid social-icons d-flex gap-3 justify-content-end">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-between mt-5 pt-5 px-0">
          <p>© 2025 Suits -All Rights Reserved</p>
          <p>Privacy Policy / Term & Conditions</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
