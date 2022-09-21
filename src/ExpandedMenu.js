import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles.css";
import {Link} from "react-router-dom";

export function ExpandedMenu({ list }) {
    let keys = Object.keys(list);
  
    return (
      <div className="expanded-menu w-100 bg-white py-3 d-flex flex-column align-items-center ">
        <div className="heading d-flex flex-column gap-3">
          {keys.map((item, index) => {
            return (
              <div className="d-flex flex-column gap-3" key={index}>
                <div>{`${item} : `}</div>
                <div className=" list d-flex flex-column gap-3">
                  {list[item].map((arr, index) => {
                    if(arr === "Forgot Password"){
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    return <Link to="/ForgotPassword" key={index} className={`left-menu-${arr}`}> {`${arr}`} </Link>;
                    }
                    else if(arr === "404 Page"){
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    return <Link to="/404Page" key={index} className={`left-menu-${arr}`}> {`${arr}`} </Link>;
                    }
                    else if(arr === "Blank Page"){
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    return <Link to="/BlankPage" key={index} className={`left-menu-${arr}`}> {`${arr}`} </Link>;
                    }
                    else{
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    return <Link to={`/${arr}`} key={index} className={`left-menu-${arr}`}> {`${arr}`} </Link>;
                    }
                  })}
                </div> 
              </div>
            );
          })}
        </div>
      </div>
    );
  }