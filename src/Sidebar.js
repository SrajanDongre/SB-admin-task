import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles.css";
import { useState } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughWink } from "@fortawesome/free-regular-svg-icons";
import { faTachometerAltFast } from "@fortawesome/free-solid-svg-icons";
import { IoSettingsSharp } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
import { AiFillFolder, AiOutlineAreaChart } from "react-icons/ai";
import { HiTable } from "react-icons/hi";
import { GoRocket } from "react-icons/go";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import {ExpandedMenu} from "./ExpandedMenu";


export function SideBar() {
  let [compArrowClicked, setCompArrowClicked] = useState(false);
  let [utilArrowClicked, setUtilArrowClicked] = useState(false);
  let [pagesArrowClicked, setPagesArrowClicked] = useState(false);
  let [list, setList] = useState([]);

  return (
   
      <nav className="navbar navbar-expand-lg bg-primary d-flex align-items-start">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="sidebar bg-primary d-flex flex-column w-100">
            <div className="sidebar-brand d-flex gap-3 mx-auto my-3">
              {/* laugh wink icon and brand name */}
              <div className="sidebar-brand-icon">
                <FontAwesomeIcon
                  icon={faFaceLaughWink}
                  className="laugh-wink fa-2xl text-white"
                />
              </div>
              <div className="sidebar-brand-name">
                <p className="text-white fw-bold fs-5">
                  SB ADMIN<sup className="mx-1">2</sup>
                </p>
              </div>
            </div>

            {/* horizontal line and dashboard icon */}
            <div className="d-flex flex-column gap-4">
              <div>
                <hr className="sidebar-divider text-white mx-auto my-0"></hr>
              </div>

              <Link to="/" className="dashboard d-flex gap-1">
                <div className="dashboard-icon mx-3">
                  <FontAwesomeIcon
                    icon={faTachometerAltFast}
                    className="tachometer fa-lg text-white"
                  />
                </div>

                <div className="dashboard-name">
                  <p className="text-white fw-bold fs-7 py-0 my-0">Dashboard</p>
                </div>
              </Link>

              <div>
                <hr className="sidebar-divider text-white mx-auto my-0"></hr>
              </div>

              <div className="interface fw-bold mx-3">INTERFACE</div>

              {/* component menu */}

              <ul className="navbar-nav d-flex flex-column gap-4">
                {/* component link */}
                <li className="nav-item mx-3">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="nav-link d-flex justify-content-between"
                    onClick={() => {
                      setUtilArrowClicked(false);
                      setPagesArrowClicked(false);
                      setCompArrowClicked(!compArrowClicked);

                      // set the contents to be shown in drop down menu
                      setList({
                        "CUSTOM COMPONENTS": ["Buttons", "Cards"],
                      });
                    }}
                  >
                    <div className="menu-items d-flex gap-2">
                      <div>
                        <IoSettingsSharp className="nav-icon" size={20} />
                      </div>
                      <div className="menu-name">Components</div>
                    </div>

                    <div className="right-arrow">
                      {compArrowClicked ? (
                        <MdKeyboardArrowDown size={25} />
                      ) : (
                        <MdKeyboardArrowRight size={25} />
                      )}
                    </div>
                  </a>

                  {/* pass contents as props  */}
                  {compArrowClicked ? <ExpandedMenu list={list} /> : ""}
                </li>

                {/* utilities link */}
                <li className="nav-item mx-3">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="utilities nav-link d-flex justify-content-between"
                    onClick={() => {
                      setCompArrowClicked(false);
                      setPagesArrowClicked(false);
                      setUtilArrowClicked(!utilArrowClicked);
                      // set the contents to be shown in drop down menu
                      setList({
                        "CUSTOM UTILITIES": [
                          "Colors",
                          "Borders",
                          "Animations",
                          "Other",
                        ],
                      });
                    }}
                  >
                    <div className="menu-items d-flex gap-2">
                      <div>
                        <TiSpanner className="nav-icon" size={20} />
                      </div>
                      <div className="menu-name">Utilities</div>
                    </div>

                    <div className="right-arrow">
                      {utilArrowClicked ? (
                        <MdKeyboardArrowDown size={25} />
                      ) : (
                        <MdKeyboardArrowRight size={25} />
                      )}
                    </div>
                  </a>
                  {/* pass contents as props  */}
                  {utilArrowClicked ? <ExpandedMenu list={list} /> : ""}
                </li>
              </ul>

              <div>
                <hr className="sidebar-divider text-white mx-auto my-0"></hr>
              </div>

              <div className="interface fw-bold mx-3">ADDONS</div>

              <ul className="navbar-nav d-flex flex-column gap-4">
                {/* pages link */}
                <li className="nav-item mx-3">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="pages nav-link d-flex justify-content-between"
                    onClick={() => {
                      setCompArrowClicked(false);
                      setUtilArrowClicked(false);
                      setPagesArrowClicked(!pagesArrowClicked);

                      setList({
                        "LOGIN SCREENS": [
                          "Login",
                          "Register",
                          "Forgot Password",
                        ],
                        "OTHER PAGES": ["404 Page", "Blank Page"],
                      });
                    }}
                  >
                    <div className="menu-items d-flex gap-2">
                      <div>
                        <AiFillFolder className="nav-icon" size={20} />
                      </div>
                      <div className="menu-name">Pages</div>
                    </div>

                    <div className="right-arrow">
                      {pagesArrowClicked ? (
                        <MdKeyboardArrowDown size={25} />
                      ) : (
                        <MdKeyboardArrowRight size={25} />
                      )}
                    </div>
                  </a>

                  {/* pass contents as props  */}
                  {pagesArrowClicked ? <ExpandedMenu list={list} /> : ""}
                </li>

                {/* charts link */}
                <li className="nav-item mx-3">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="nav-link d-flex justify-content-between"
                  >
                    <div className="menu-items d-flex gap-2">
                      <div>
                        <AiOutlineAreaChart className="nav-icon" size={20} />
                      </div>
                      <Link to="/charts" className="charts-link">
                      <div className="menu-name">Charts</div>
                      </Link>
                    </div>
                  </a>
                </li>

                {/* tables link */}
                <li className="nav-item mx-3">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className="nav-link d-flex justify-content-between"
                  >
                    <div className="menu-items d-flex gap-2">
                      <div>
                        <HiTable className="nav-icon" size={20} />
                      </div>
                      <Link to="/tables" className="tables-link"><div className="menu-name">Tables</div></Link>
                    </div>
                  </a>
                </li>
              </ul>

              <div>
                <hr className="sidebar-divider text-white mx-auto my-0"></hr>
              </div>

              <div className="rocket-box d-flex flex-column gap-1 mx-auto my-2 py-2">
                <div className="icon-rocket mx-auto">
                  <GoRocket size={50} />
                </div>
                <div>
                  <p className="rocket-text">
                    <span className="fw-bold">SB ADMIN PRO</span> is packed with
                    <br />
                    premium features,
                    <br />
                    components, and more!
                  </p>
                </div>
                <button className="btn btn-success col-10 mx-auto">
                  Upgrade to Pro!
                </button>
              </div>
            </div>
          </div>
          {/* ends */}
        </div>
      </div>
    </nav>
   
  );
}