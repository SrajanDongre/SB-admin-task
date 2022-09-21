import "./LoginPage.css";
import loginPug from "../images/loginPug.jpg";
import {AiOutlineGoogle} from "react-icons/ai";
import {RiFacebookFill} from "react-icons/ri";

export function LoginPage() {
  return (
    <div className="login-container container">
      <div className="row my-5 mx-auto">
        <div className="col">
          <div className="card">
            <div className="row">
              <div className="img-section col-lg-6">
                <img src={loginPug} alt="pug" className="login-pug"></img>
              </div>
              {/* content column starts */}
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="header text-gray-900">Welcome Back!</h4>
                  </div>
                  <form className="user-login my-4">
                    <div className="form-group">
                        <input type="email" className="form-control form-control-login" placeholder="Enter Email Address..." id="login-email" name="login-email"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-login" placeholder="Password" id="login-password" name="login-password"></input>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="remember-checkbox"></input>
                            <label clasName="form-check-label remember-me-label" htmlFor="remember-checkbox">Remember Me</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="button" className="form-control form-control-btn btn btn-primary text-white">Login</button>
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
                        <a href="#" className="login-bottom-links text-primary text-decoration-none">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="login-bottom-links text-primary text-decoration-none">Create an Account!</a>
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