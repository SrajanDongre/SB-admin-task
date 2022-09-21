import "./ForgotPassword.css";
import forgotPug from "../images/forgot-pug.jpg";

export function ForgotPasswordPage() {
  return (
    <div className="forgotPassword-container container">
      <div className="row my-5 mx-auto">
        <div className="col">
          <div className="card forgot-password-card mx-auto">
            <div className="row">
              <div className="img-section col-lg-5">
                <img
                  src={forgotPug}
                  alt="pug"
                  className="forgot-password-pug"
                ></img>
              </div>
              {/* content column starts */}
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="header text-gray-900">
                      Forgot Your Password?
                    </h4>
                    <p className="text-secondary">
                      We get it, stuff happens. Just enter your email
                      <br />
                      address below and we'll send you a link to
                      <br />
                      reset your password!
                    </p>
                  </div>
                  {/* form start */}
                  <form className="user-forgot-password my-4">
                  <div className="form-group">
                        <input type="email" className="form-control form-control-forgot-password" placeholder="Enter Email Address..." id="email" name="email"></input>
                    </div>
                    <div className="form-group">
                        <button type="button" className="form-control form-control-forgot-password btn btn-primary text-white">Reset Password</button>
                    </div>
                    <hr></hr>
                    <div className="text-center">
                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="forgot-password-bottom-links text-primary text-decoration-none">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="forgot-password-bottom-links text-primary text-decoration-none">Already have an Account? Login!</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}