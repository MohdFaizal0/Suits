import React, { useState } from "react";
import profilePic from "../../assets/profile.jpg";
import "./Sidebar.css";
import { LuNotebookPen } from "react-icons/lu";
import { AiFillSignal } from "react-icons/ai";
import { PiTruckLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");

  const handleClick = (item) => {
    setSelected(item);
  };

  return (
    <div className="container-fluid w-25 sidebar position-fixed start-0 top-0">
      <div className="sidebarProfile container-fluid d-flex align-items-center gap-3">
        <div className="profile-pic-container rounded-circle">
          <img
            src={profilePic}
            className="img-fluid object-fit-contain"
            alt="Profile"
          />
        </div>
        <div className="pt-3">
          <h6 className="m-0 text-warning">Timotheus Brenden</h6>
          <p className="m-0">Sales Manager</p>
        </div>
      </div>

      <p className="pt-3 ps-2 text-secondary">E-Commerce</p>

      <div className="buttons container-fluid p-0">
        <ul className="p-0">
          <li
            className={selected === "Dashboard" ? "selected" : ""}
            onClick={() => handleClick("Dashboard")}
          >
            <Link to="/" className="link">
              <AiFillSignal
                className={
                  selected === "Dashboard"
                    ? "sidebar-icon sidebar-icon-selected"
                    : "sidebar-icon"
                }
              />
              Dashboard
            </Link>
          </li>

          <li
            className={selected === "Orders" ? "selected" : ""}
            onClick={() => handleClick("Orders")}
          >
            <Link to="/Orders" className="link">
              <LuNotebookPen
                className={
                  selected === "Orders"
                    ? "sidebar-icon sidebar-icon-selected"
                    : "sidebar-icon"
                }
              />
              Orders
            </Link>
          </li>

          <li
            className={selected === "Products" ? "selected" : ""}
            onClick={() => handleClick("Products")}
          >
            <Link to="/Products" className="link">
              <PiTruckLight
                className={
                  selected === "Products"
                    ? "sidebar-icon sidebar-icon-selected"
                    : "sidebar-icon"
                }
              />
              Products
            </Link>
          </li>

          <li
            className={selected === "Buyer" ? "selected" : ""}
            onClick={() => handleClick("Buyer")}
          >
            <Link to="/Buyer" className="link">
              <BsWallet2
                className={
                  selected === "Buyer"
                    ? "sidebar-icon sidebar-icon-selected"
                    : "sidebar-icon"
                }
              />
              Buyer
            </Link>
          </li>

          <li
            className={selected === "Customers" ? "selected" : ""}
            onClick={() => handleClick("Customers")}
          >
            <Link to="/Customers" className="link">
              <MdPermContactCalendar
                className={
                  selected === "Customers"
                    ? "sidebar-icon sidebar-icon-selected"
                    : "sidebar-icon"
                }
              />
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
