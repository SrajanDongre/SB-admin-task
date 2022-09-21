import { BiSearch } from "react-icons/bi";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useState} from "react";
import {AlertsSection} from "./Alerts-Notifications/Alerts";
import {NotificationSection} from "./Alerts-Notifications/Notification";
import {alertContent} from "./Components/AlertContent";
import {notificationContent} from "./Components/NotificationContent";
import {ProfileMenu} from "./ProfileMenu";
import {RiAccountPinCircleFill,RiListSettingsLine} from "react-icons/ri"; 
import {MdAccountTree,MdOutlineLogout} from "react-icons/md";

export function Header(){
  let[showSearch,setShowSearch] = useState(false);
   let[showAlert,setShowAlert] = useState(false);
    let[showNotification,setShowNotification] = useState(false);
    let[profileMenu,setProfileMenu] = useState(false);
    let [list, setList] = useState([]);
    return(
            <form className="header-form w-100 bg-white m-0 p-0 d-flex justify-content-around align-items-center">
            <div className="search-bar">
              <input type="text" className="form-control" id="search-bar" name="search-bar"
              placeholder="search for..."></input>
              <button type="button" className="search-button btn btn-primary">
                <i><BiSearch /></i>
              </button>
            </div>
            <div className="search-bar-small-screen">
              <ul className="search-bar-iconOnly">
                <li className="dropdown search-bar-list">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="dropdown-toggle" href="#" id="searchDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i><BiSearch className="text-secondary" onClick={() => setShowSearch(!showSearch)} /></i>
                  </a>
                  {showSearch ? <div className="dropdown-menu" aria-labelledby="searchDropDown">
              <input type="text" className="form-control" id="search-bar" name="search-bar"
              placeholder="search for..."></input>
              <button type="button" className="search-button btn btn-primary">
                <i><BiSearch /></i>
              </button>
            </div> : ""}
                  
                </li>
              </ul>
            </div>

            <div className="notifications d-flex gap-5">
              <div className="notification-icon">
                <Badge badgeContent={`3+`} color="error">
                  <NotificationsIcon color="action" onClick={() => setShowAlert(!showAlert) } />
                </Badge>

                {showAlert ? <div className="alert-section"><AlertsSection header={"Alerts Center"} alertContent={alertContent} bottomLink={"Show All Alerts"} /></div> : ""}
              </div>

              <div className="mail-icon">
                <Badge badgeContent={7} color="error">
                  <MailIcon color="action" onClick={() => setShowNotification(!showNotification) } />
                </Badge>

                {showNotification ? <div className="notification-section"><NotificationSection header={"Message Center"} notificationContent={notificationContent} bottomLink={"Read More Messages"} /></div> : ""}
              </div>
            </div>

            <div className="account d-flex">
              <div className="horizontal-rule">
                <HorizontalRuleIcon className="rule" />
              </div>
              <div className="d-flex gap-1">
                <div className="account-name">Douglas McGhee</div>
                <div className="account-picture">
                  <AccountCircleIcon onClick={() => {
                      setProfileMenu(!profileMenu)
                      // set the contents to be shown in drop down menu
                      setList([
                        {
                          icon:<RiAccountPinCircleFill size={18} />,
                          name:"Profile"
                        },
                        {
                          icon:<RiListSettingsLine size={18} />,
                          name:"Settings"
                        },
                        {
                          icon:<MdAccountTree size={18} />,
                          name:"Activity Log"
                        },
                        {
                          icon:<MdOutlineLogout size={18} />,
                          name:"Logout"
                        }
                      ]);
                    }} />
                </div>
                {profileMenu ? <div className="profile-menu"><ProfileMenu list={list} /></div> :""}
              </div>
            </div>
          </form>
    )
}