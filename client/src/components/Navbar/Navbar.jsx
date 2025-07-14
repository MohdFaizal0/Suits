import React, { useState } from "react";
import { GoArchive, GoPerson, GoSearch } from "react-icons/go";
import "./navbar.css";
import { Link } from "react-router-dom";
import shopSuits from "../../assets/collections/collection3.webp";
import shopShirts from "../../assets/collections/collection5.webp";
import customisation from "../../assets/suits sec/customisation.avif";
import customisation2 from "../../assets/suits sec/customisation2.avif";
import useCart from "../Context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isExpand, setIsExpand] = useState(false);
  console.log(isExpand);
  console.log(cartItems.length);

  const [cartCount, setCartCount] = useState(null);

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary fixed-top">
      <div className="container-fluid position-relative">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li
              className="nav-item"
              onMouseEnter={() => setIsExpand(true)}
              onMouseLeave={() => setIsExpand(false)}
            >
              <div className="nav-link">Shop</div>

              {isExpand && (
                <div
                  className="drop-down d-flex justify-content-between"
                  onMouseEnter={() => setIsExpand(true)}
                  onMouseLeave={() => setIsExpand(false)}
                >
                  {/* 🔽 Dropdown content */}
                  <div className="container-fluid pt-5 ps-4 p-3 d-flex">
                    <div className="container-fluid d-flex gap-5">
                      <ul className="list-unstyled d-flex gap-2 flex-column">
                        <p>
                          <b>Custom-made</b>
                        </p>
                        <li>
                          <a href="/suits">Suits</a>
                        </li>
                        <li>
                          <a href="/shirts">Shits</a>
                        </li>
                        <li>
                          <a href="/chinos">Chinos</a>
                        </li>
                        <li>
                          <a href="/tuxedos">Tuxedos</a>
                        </li>
                        <li>
                          <a href="/morning-coats">Morning Coats</a>
                        </li>
                        <li>
                          <a href="/trousers">Trousers</a>
                        </li>
                        <li>
                          <a href="/waistcoats">Waistcoats</a>
                        </li>
                        <li>
                          <a href="/blazers">Blazers</a>
                        </li>
                      </ul>
                      <ul className="list-unstyled d-flex gap-2 flex-column">
                        <p>
                          <b>Suits By Type</b>
                        </p>
                        <li>
                          <a href="/wedding-suits">Wedding Suits</a>
                        </li>
                        <li>
                          <a href="/casual-suits">Casual Suits</a>
                        </li>
                        <li>
                          <a href="/buisness-suits">Business Suits</a>
                        </li>
                        <li>
                          <a href="/double-brested-suits">
                            Double-Breasted Suits
                          </a>
                        </li>
                        <li>
                          <a href="/three-piece-suits">Three-Piece Suits</a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="container-fluid d-flex p-0"
                      style={{ width: "50%" }}
                    >
                      <div className="container-fluid" role="button">
                        <img
                          src={shopSuits}
                          className="img-fluid h-75"
                          alt=""
                        />
                        <p>Shop Suits</p>
                      </div>
                      <div className="container-fluid" role="button">
                        <img
                          src={shopShirts}
                          className="img-fluid h-75 object-fit-cover"
                          alt=""
                        />
                        <p>Shop Shirts</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              className="nav-item"
              onMouseEnter={() => setIsExpand(true)}
              onMouseLeave={() => setIsExpand(false)}
            >
              <div className="nav-link">About</div>

              {isExpand && (
                <div
                  className="drop-down"
                  onMouseEnter={() => setIsExpand(true)}
                  onMouseLeave={() => setIsExpand(false)}
                >
                  <div className="container-fluid pt-5 ps-4 p-3 d-flex">
                    <div className="container-fluid">
                      <ul className="list-unstyled d-flex gap-2 flex-column">
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/how-its-working">How its working</Link>
                        </li>
                        <li>
                          <Link to="our-fabrics">Our fabrics</Link>
                        </li>
                        <li>
                          <Link to="/customisations">Customisations</Link>
                        </li>
                        <li>
                          <Link to="faq">Frequently asked questions</Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="container-fluid d-flex p-0"
                      style={{ width: "50%" }}
                    >
                      <div className="container-fluid" role="button">
                        <img
                          src={customisation}
                          className="img-fluid object-fit-cover"
                          alt=""
                        />
                        <p>See Our Customisations</p>
                      </div>
                      <div className="container-fluid" role="button">
                        <img
                          src={customisation2}
                          className="img-fluid object-fit-cover"
                          alt=""
                        />
                        <p>Explore Our Fabrics</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <b> Book Now</b>
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Brand centered absolutely */}
        <Link
          className="navbar-brand position-absolute top-50 start-50 translate-middle"
          to="/"
        >
          SUITS
        </Link>

        {/* 🔹 Toggler on the right (for mobile menu) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Right side links */}
        <ul className="navbar-nav ms-auto flex-row gap-2 align-items-center">
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              <GoSearch className="icon fs-4" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <GoPerson className="icon fs-4" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <GoArchive className="icon fs-4" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
