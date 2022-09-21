import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Buttons.css";
import { TiSocialFacebook, TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoMdArrowRoundForward,IoMdArrowForward } from "react-icons/io";
import { AiFillWarning } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF,FaFlag } from "react-icons/fa";

export function Buttons() {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="dashboard-head mx-4">
        <div className="dashboard-text">Buttons</div>
      </div>

      <div className="card-container d-flex justify-content-between mx-4">
        {/* left cards start */}
        <div className="card-container left-container d-flex flex-column gap-5">
          <div className="top-left card circle-button">
            <div className="card-header text-primary fw-bold">
              Circle Buttons
            </div>
            <div className="card-body d-flex flex-column gap-3">
              <div className="card-text text-secondary">
                Use Font Awesome Icons (included with this theme package) <br />
                along with the circle buttons as shown in the examples below!
              </div>
              <div className="button-circle d-flex flex-column gap-2">
                <div className="button-circle-text text-danger">
                  .btn-circle
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {/* first row circle buttons */}
                  {/* facebook button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-primary btn-circle">
                    <i>
                      <TiSocialFacebook size={25} />
                    </i>
                  </a>

                  {/* success button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-success btn-circle">
                    <i>
                      <TiTick size={25} />
                    </i>
                  </a>

                  {/* info button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-info btn-circle">
                    <i>
                      <IoInformationCircleSharp
                        size={25}
                        className="text-light"
                      />
                    </i>
                  </a>

                  {/* warning button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-warning btn-circle">
                    <i>
                      <AiFillWarning size={25} className="text-light" />
                    </i>
                  </a>

                  {/* warning button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-danger btn-circle">
                    <i>
                      <MdDelete size={25} />
                    </i>
                  </a>
                </div>
              </div>

              {/* small buttons section starts */}
              <div className="button-circle d-flex flex-column gap-2">
                <div className="button-circle-text text-danger d-flex gap-2">
                  <div>.btn-circle</div>
                  <div>.btn-sm</div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {/* second row circle buttons */}
                  {/* facebook button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-primary btn-circle btn-sm">
                    <i>
                      <TiSocialFacebook size={18} />
                    </i>
                  </a>

                  {/* success button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-success btn-circle btn-sm">
                    <i>
                      <TiTick size={18} />
                    </i>
                  </a>

                  {/* info button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-info btn-circle btn-sm">
                    <i>
                      <IoInformationCircleSharp
                        className="text-light"
                        size={18}
                      />
                    </i>
                  </a>

                  {/* warning button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-warning btn-circle btn-sm">
                    <i>
                      <AiFillWarning className="text-light" size={18} />
                    </i>
                  </a>

                  {/* warning button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-danger btn-circle btn-sm">
                    <i>
                      <MdDelete size={18} />
                    </i>
                  </a>
                </div>
              </div>
              {/* small buttons section ends */}

              {/* large buttons section starts */}
              <div className="button-circle d-flex flex-column gap-2">
                <div className="button-circle-text text-danger d-flex gap-2">
                  <div>.btn-circle</div>
                  <div>.btn-lg</div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {/* third row circle buttons */}
                  {/* facebook button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-primary btn-circle btn-lg">
                    <i>
                      <TiSocialFacebook size={35} />
                    </i>
                  </a>

                  {/* success button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-success btn-circle btn-lg">
                    <i>
                      <TiTick size={35} />
                    </i>
                  </a>

                  {/* info button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-info btn-circle btn-lg">
                    <i>
                      <IoInformationCircleSharp
                        className="text-light"
                        size={35}
                      />
                    </i>
                  </a>

                  {/* warning button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-warning btn-circle btn-lg">
                    <i>
                      <AiFillWarning className="text-light" size={35} />
                    </i>
                  </a>

                  {/* warning button */}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="btn btn-danger btn-circle btn-lg">
                    <i>
                      <MdDelete size={35} />
                    </i>
                  </a>
                </div>
              </div>
              {/* large buttons section ends */}
            </div>
          </div>

          {/* left card bottom - starts */}
          <div className="bottom-left card">
            <div className="card-header text-primary fw-bold">
              Brand Buttons
            </div>
            <div className="card-body d-flex flex-column gap-3">
              <div className="card-text text-secondary d-flex flex-column gap-4">
                <div>
                  Google and Facebook buttons are available featuring each
                  <br /> company's respective brand color. They are used on the
                  user
                  <br />
                  login and registration pages.
                </div>
                <div>
                  You can create more custom buttons by adding a new color
                  <br />
                  variable in the{" "}
                  <span className="text-danger">_variables.scss </span>file and
                  then using the
                  <br />
                  Bootstrap button variant mixin to create a new style, as
                  <br />
                  demonstrated in the{" "}
                  <span className="text-danger">_buttons.scss </span>file.
                </div>
              </div>
              <div className="buttons-section d-flex flex-column gap-2">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="btn btn-danger d-flex gap-2 justify-content-center"
                >
                  <div>
                    <BsGoogle size={20} />
                  </div>
                  <div>.btn-google</div>
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="btn btn-primary d-flex gap-2 justify-content-center"
                >
                  <div>
                    <FaFacebookF size={20} />
                  </div>
                  <div>.btn-facebook</div>
                </a>
              </div>
            </div>
          </div>
          {/* left card bottom ends */}
        </div>
        {/* left cards end */}

        {/* right card - starts */}
        <div className="right-card card">
          <div className="card-header text-primary fw-bold">
            Split Buttons with Icon
          </div>
          <div className="card-body d-flex flex-column gap-3">
            <div className="card-text text-secondary">
              Works with any button colors, just use the{" "}
              <span className="text-danger">.btn-icon-split</span>
              <br />
              class and the markup in the examples below. The examples
              <br />
              below also use the{" "}
              <span className="text-danger">.text-white-50</span> helper class
              on the icons
              <br />
              for additional styling, but it is not required.
            </div>
            <div className="buttons-section d-flex flex-column gap-3">
              {/* primary button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-primary btn btn-primary p-0 d-flex gap-3 justify-content-start col-sm-7 align-items-center"
              >
                <span className="split-icon text-white-50"><i><FaFlag /></i></span>
                <span className="split-buttons-text text-white fw-500">Split Button Primary</span>
              </a>

              {/* success button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-success btn btn-success p-0 d-flex gap-3 justify-content-start col-sm-7 align-items-center"
              >
                <span className="split-icon text-white-50"><i><TiTick size={25} /></i></span>
                <span className="split-buttons-text text-white fw-500">Split Button Success</span>
              </a>

              {/* info button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-info btn btn-info p-0 d-flex gap-3 justify-content-start col-sm-7 align-items-center"
              >
                <span className="split-icon text-white-50"><i><IoInformationCircleSharp size={25} /></i></span>
                <span className="split-buttons-text text-white fw-500">Split Button Info</span>
              </a>

              {/* warning button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-warning btn btn-warning p-0 d-flex gap-3 justify-content-start col-sm-7 align-items-center"
              >
                <span className="split-icon text-white-50"><i><AiFillWarning size={25} /></i></span>
                <span className="split-buttons-text text-white fw-500">Split Button Warning</span>
              </a>

              {/* danger button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-danger btn btn-danger p-0 d-flex gap-3 justify-content-start col-sm-7 align-items-center"
              >
                <span className="split-icon text-white-50"><i><MdDelete size={25} /></i></span>
                <span className="split-buttons-text text-white fw-500">Split Button Danger</span>
              </a>

               {/* secondary button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-secondary btn btn-secondary p-0 d-flex gap-3 justify-content-start col-sm-7 align-items-center"
              >
                <span className="split-icon text-white-50"><i><IoMdArrowRoundForward size={25} /></i></span>
                <span className="split-buttons-text text-white fw-500">Split Button Secondary</span>
              </a>

              {/* light button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-light btn btn-light p-0 d-flex gap-3 justify-content-start col-sm-7 align-items-center"
              >
                <span className="split-icon text-white-50"><i><IoMdArrowForward size={25} /></i></span>
                <span className="split-buttons-text text-dark fw-500">Split Button Light</span>
              </a>
            </div>

            <div className="card-text text-secondary">
            Also works with small and large button classes!
            </div>

            {/* primary button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-primary-small btn btn-primary p-0 d-flex gap-3 col-sm-5 justify-content-start align-items-center"
              >
                <span className="split-icon text-white-50"><i><FaFlag /></i></span>
                <span className="split-buttons-text-small text-white fw-500">Split Button Small</span>
              </a>

{/* primary button */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="split-button-primary-large btn btn-primary p-0 d-flex gap-3 col-sm-7 justify-content-start align-items-center"
              >
                <span className="split-icon text-white-50"><i><FaFlag /></i></span>
                <span className="split-buttons-text-large text-white fw-500">Split Button Large
                </span>
              </a>
          </div>
        </div>
        {/* right card ends */}
      </div>
    </div>
  );
}