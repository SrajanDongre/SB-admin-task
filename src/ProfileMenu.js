import "./styles.css";
import {Link} from "react-router-dom";

export function ProfileMenu({ list }) {
  
    return (
      <div className="profile-menu w-100 bg-white py-3 d-flex flex-column align-items-center ">
        <div className="heading d-flex flex-column gap-3">
          {list.map((item, index) => {
            return (
              <div className="d-flex flex-column gap-1" key={index}>
                     <Link to={`/${item.name}`} key={index} className={`left-menu-${item.name} d-flex gap-3`}>
                        <div className="profile-menu-icon">
                            <i>{item.icon}</i>
                        </div>
                        <div className="profile-menu-text">
                            {item.name}
                        </div>
                        </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }