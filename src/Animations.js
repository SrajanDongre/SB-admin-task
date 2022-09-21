import "./Animations.css";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { ExpandedMenu } from "./ExpandedMenu";

export function Animations() {
  let [dropdown, setDropdown] = useState(false);
  let [dropdownFadeIn, setDropdownFadeIn] = useState(false);
  let [list, setList] = useState({});
  return (
    <div className="mx-4 d-flex flex-column gap-4">
      <div className="header d-flex flex-column">
        <div className="dashboard-text">Animation Utilities</div>
        <div className="text-secondary">
          Bootstrap's default utility classes can be found on the official{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
            target="_blank"
            rel="noreferrer"
            className="bootstrap-link"
          >
            Bootstrap Documentation
          </a>{" "}
          page. The custom utilities below were created to
          <br />
          extend this theme past the default utility classes built into
          Bootstrap's framework.
        </div>
      </div>
      {/* Header ends */}

      {/* card starts */}
      <div className="row">
        {/* left card */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header text-primary fw-bold">
              Grow in Animation Utility
            </div>
            <div className="card-body">
              <div className="d-flex flex-column gap-3">
                <p className="animated-grow-in text-danger">
                  .animated--grow-in
                </p>
                <div className="dropdown-example-text text-secondary">
                  Navbar Dropdown Example:
                </div>
                <nav className="navbar navbar-expand navbar-light bg-light px-2">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="navbar-brand" href="#">
                    Navbar
                  </a>
                  <ul className="navbar-nav ml-auto">
                    <li
                      className="nav-item d-flex gap-1"
                      onClick={() => {
                        setDropdown(!dropdown);
                        // set menus to go under vertical dot
                        setList({
                          "DORPDOWN HEADER": [
                            "Action",
                            "Another action",
                            "Something else here",
                          ],
                        });
                      }}
                    >
                      <div>
                        <a href="#" className="dropdown-link text-dark">
                          Dropdown
                        </a>
                      </div>
                      <div>
                        <IoIosArrowDown />
                      </div>
                    </li>
                  </ul>
                </nav>
                {dropdown ? (
                      <div className="earning-expandedMenu-animations-growIn">
                        <ExpandedMenu list={list} />
                      </div>
                    ) : (
                      ""
                    )}
                    <p className="note text-secondary">Note: This utility animates the CSS transform property, meaning it will<br/>
                    override any existing transforms on an element being animated! In this<br/>
                    theme, the grow in animation is only being used on dropdowns within the<br/>
                    navbar.</p>
              </div>
            </div>
          </div>
        </div>

        {/* right card */}
        <div className="col-lg-6">
          <div className="card">
          <div className="card">
            <div className="card-header text-primary fw-bold">
            Fade In Animation Utilty
            </div>
            <div className="card-body">
              <div className="d-flex flex-column gap-3">
                <p className="animated-grow-in text-danger">
                .animated--fade-in
                </p>
                <div className="dropdown-example-text text-secondary">
                  Navbar Dropdown Example:
                </div>
                <nav className="navbar navbar-expand navbar-light bg-light px-2">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="navbar-brand" href="#">
                    Navbar
                  </a>
                  <ul className="navbar-nav ml-auto">
                    <li
                      className="nav-item d-flex gap-1"
                      onClick={() => {
                        setDropdownFadeIn(!dropdownFadeIn);
                        // set menus to go under vertical dot
                        setList({
                          "DORPDOWN HEADER": [
                            "Action",
                            "Another action",
                            "Something else here",
                          ],
                        });
                      }}
                    >
                      <div>
                        <a href="#" className="dropdown-link text-dark">
                          Dropdown
                        </a>
                      </div>
                      <div>
                        <IoIosArrowDown />
                      </div>
                    </li>
                  </ul>
                </nav>
                {dropdownFadeIn ? (
                      <div className="earning-expandedMenu-animations-fadeIn">
                        <ExpandedMenu list={list} />
                      </div>
                    ) : (
                      ""
                    )}
                    <p className="note text-secondary">Note: This utility animates the CSS opacity property, meaning it will<br/>
                    override any existing opacity on an element being animated!</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* card ends */}
    </div>
  );
}