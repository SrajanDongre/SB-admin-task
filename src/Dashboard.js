import "./Content.css";
import { ImDownload3 } from "react-icons/im";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import { createContext } from "react";
import { ExpandedMenu } from "./ExpandedMenu";
import { EarningCards } from "./EarningCards";
import { useState } from "react";
import { LineChart } from "./Components/LineChart";
import {DoughnutChart} from "./Components/Doughnut";
import {Projects} from "./Projects";
import undraw_posting_photo from './undraw_posting_photo.svg.PNG';
import {ColorsList} from "./ColorsList";
import {props} from "./props";

export function Dashboard() {
  

  let [earningVerticalDot, setEarningVerticalDot] = useState(false);
  let [revenueVerticalDot, setRevenueVerticalDot] = useState(false);
  let [list, setList] = useState({});

  return (
    <div className="container d-lg-flex flex-column gap-2">
      <div className="dashboard-head mx-4">
        <div className="dashboard-text">Dashboard</div>
        <div>
          <button className="generate-report btn btn-primary" type="button">
            <ImDownload3 /> Generate Report
          </button>
        </div>
      </div>

        <EarningCards value={props} />
        
      <div className="charts d-lg-flex">
        {/* earning overview chart card starts */}
      <div className="earning-chart card-container">
        <div className="card mx-4">
          <h5 className="card-header">
            <div className="d-flex justify-content-between">
              <div className="earning-overview-text text-primary fs-5">
                Earnings Overview
              </div>
              <div className="vertical-dots-icon">
                <BiDotsVerticalRounded
                  className="biDotsVerticalRounded"
                  size={25}
                  onClick={() => {
                    setEarningVerticalDot(!earningVerticalDot);
                    setList({
                      "DORPDOWN HEADER": [
                        "Action",
                        "Another action",
                        "Something else here",
                      ],
                    });
                  }}
                />
                {earningVerticalDot ? (
                  <div className="earning-expandedMenu">
                    <ExpandedMenu list={list} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </h5>
          <div className="card-body">
            {/* line chart - earning overview */}
            <div className="card-text chart bg-white">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
       {/* earning overview chart card ends */}

        {/* Revenue Sources chart card starts */}
      <div className="revenue-chart card-container">
        <div className="card mx-4">
          <h5 className="card-header">
            <div className="d-flex justify-content-between">
              <div className="earning-overview-text text-primary fs-5">
                Revenue Sources
              </div>
              <div className="vertical-dots-icon">
                <BiDotsVerticalRounded
                  className="biDotsVerticalRounded"
                  size={25}
                  onClick={() => {
                    setRevenueVerticalDot(!revenueVerticalDot);
                    setList({
                      "DORPDOWN HEADER": [
                        "Action",
                        "Another action",
                        "Something else here",
                      ],
                    });
                  }}
                />
                {revenueVerticalDot ? (
                  <div className="earning-expandedMenu">
                    <ExpandedMenu list={list} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </h5>
          <div className="card-body">
            {/* line chart - earning overview */}
            <div className="card-text chart bg-white">
              <DoughnutChart className="doughnut-chart" />
            </div>
          </div>
        </div>
      </div>
       {/* Revenue Sources chart card ends */}
      </div>

      <div className="projects-illus d-lg-flex">
         {/* progress card starts */}
       <div className="projects card-container">
        <div className="card mx-4">
          <h5 className="card-header">
            <div className="d-flex justify-content-between">
              <div className="earning-overview-text text-primary fs-5">
                Projects
              </div>
        
            </div>
          </h5>
          <div className="card-body">
            <div className="card-text chart bg-white">
              <Projects />
            </div>
          </div>
        </div>
      </div>
       {/* progress card ends */}

        {/* illustrations card starts */}
        <div className="illustrations card-container">
        <div className="card illustrations-card mx-4">
          <h5 className="card-header">
              <div className="earning-overview-text text-primary fs-5">
                Illustrations
              </div>
          </h5>
          <img src={undraw_posting_photo} className="undraw-photo my-4 mx-auto" alt="illustation" />
          <div className="card-body">
            {/* line chart - earning overview */}
            <div className="card-text chart bg-white text-secondary mx-auto">
              Add some quality, svg illustrations to your project courtesy of <br/>
              <span><a href="https://undraw.co/" target="_blank" rel="noreferrer" className="unDrawLink text-primary">unDraw</a></span>
              , a constantly updated collection of beautiful svg <br/>images that you can use completely free
              and without <br/>attribution!

              <div className="my-4"><a href="https://undraw.co/" target="_blank" rel="noreferrer" className="unDrawLink text-primary">Browse illustrations on unDraw →</a></div>
            </div>
          </div>
        </div>
      </div>
       {/* illustrations card ends */}
      </div>

      <div className="colorslist-devappraoch d-lg-flex mx-4 my-5 gap-5">
        {/* colors list div starts */}
        <div className="colors-list">
          <ColorsList />
        </div>
         {/* colors list div ends */}

         {/* development approach starts */}
         <div className="development-approach card-container">
          <div className="card development-approach-card">
          <h5 className="card-header">
              <div className="earning-overview-text text-primary fs-5">
                Development Approach
              </div>
          </h5>
          <div className="card-body">
            {/* line chart - earning overview */}
            <div className="card-text chart bg-white text-secondary mx-auto d-flex flex-column gap-3">
              <div className="dev-approach-text">
              SB Admin 2 makes extensive use of Bootstrap 4 utility<br/> classes 
            in order to reduce CSS bloat and poor page<br/> performance.
            Custom CSS classes are used to create custom<br/> components
            and custom utility classes.
              </div>
           <div className="dev-approach-text">
           Before working with this theme, you should become familiar <br/>
           with the Bootstrap framework, especially the utility classes.
           </div>
            </div>
          </div>
          </div>
         </div>
          {/* development approach ends */}
      </div>

    </div>
  );
}