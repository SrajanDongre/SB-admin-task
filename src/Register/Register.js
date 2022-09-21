import "./Register.css";
import registerPug from "../images/registerPug.jpg";
import {AiOutlineGoogle} from "react-icons/ai";
import {RiFacebookFill} from "react-icons/ri";

export function RegisterPage() {
  return (
    <div className="register-container container">
      <div className="row my-5 mx-auto">
        <div className="col">
          <div className="card">
            <div className="row">
              <div className="img-section col-lg-5">
                <img src={registerPug} alt="pug" className="register-pug"></img>
              </div>
              {/* content column starts */}
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="header text-gray-900">Create an Account!</h4>
                  </div>
                  <form className="user-register my-4">
                    <div className="d-flex justify-content-between">
                    <div className="form-group-name">
                        <input type="text" className="form-control form-control-register" placeholder="First Name" id="firstName" name="firstName"></input>
                    </div>
                    <div className="form-group-name">
                        <input type="text" className="form-control form-control-register" placeholder="Last Name" id="lastName" name="lastName"></input>
                    </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control form-control-register" placeholder="Email Address" id="email" name="email"></input>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className="form-group-name">
                        <input type="text" className="form-control form-control-register" placeholder="Password" id="password" name="password"></input>
                    </div>
                    <div className="form-group-name">
                        <input type="text" className="form-control form-control-register" placeholder="Repeat Password" id="repeatPassword" name="repeatPassword"></input>
                    </div>
                    </div>
                    <div className="form-group">
                        <button type="button" className="form-control form-control-btn btn btn-primary text-white">Register Account</button>
                    </div>
                    <hr></hr>
                    <div className="form-group">
                        <button type="button" className="form-control form-control-btn btn btn-danger text-white d-flex justify-content-center align-items-center gap-1"><i><AiOutlineGoogle size={20} /></i><span>Login with Google</span></button>
                    </div>
                    <div className="form-group">
                        <button type="button" className="form-control form-control-btn form-control-btn-facebook btn text-white d-flex justify-content-center align-items-center gap-1"><i><RiFacebookFill size={20} /></i><span>Login with Facebook</span></button>
                    </div>
                    <hr></hr>
                    <div className="text-center">
                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="register-bottom-links text-primary text-decoration-none">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="register-bottom-links text-primary text-decoration-none">Already have an Account? Login!</a>
                    </div>
                  </form>
                </div>
              </div>
              {/* content column ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}