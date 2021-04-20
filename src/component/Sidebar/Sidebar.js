import {
  faPlus,
  faFileAlt,
  faGripHorizontal,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar py-5 px-4" style={{ height: "100vh"}}>
      <ul className="list-unstyled">
        <li>
          <Link to="/">
            <FontAwesomeIcon className="text-white" icon={faGripHorizontal} />{" "}
            <span className="text-white">Order List</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <FontAwesomeIcon className="text-white" icon={faPlus} />{" "}
            <span className="text-white">Add Services</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon className="text-white" icon={faFileAlt} />{" "}
            <span className="text-white">Manage Service</span>
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <FontAwesomeIcon className="text-white" icon={faUserCog} />{" "}
            <span className="text-white">Setting</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
