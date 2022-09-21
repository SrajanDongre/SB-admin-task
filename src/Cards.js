import "./Cards.css";
import { props } from "./props";
import { EarningCards } from "./EarningCards";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState} from "react";
import { ExpandedMenu } from "./ExpandedMenu";

export function Cards() {
    let [dropdownCardVerticalDot, setDropdownCardVerticalDot] = useState(false);
    let [list, setList] = useState({});
  return (
    <div>
      <div className="dashboard-head mx-4">
        <div className="dashboard-text">Cards</div>
      </div>

        <EarningCards value={props} />

        {/* 4 cards start */}
        <div className="row mx-4">
            <div className="col-lg-6 ">
                {/* default card starts */}
                <div className="card mb-4">
                    <div className="card-header text-primary fw-bold">
                    Default Card Example
                    </div>

                    <div className="card-body">
                        <div className="card-text text-secondary">
                        This card uses Bootstrap's default styling with no utility<br/>
                        classes added. Global styles are the only things modifying the<br/>
                        look and feel of this default card example.
                        </div>
                    </div>
                </div>
                {/* default card ends */}

                {/* basic card starts */}
                <div className="card">
                    <div className="card-header text-primary fw-bold">
                    Basic Card Example
                    </div>

                    <div className="card-body">
                        <div className="card-text text-secondary">
                        The styling for this basic card example is created by using<br/>
                        default Bootstrap utility classes. By using utility classes, the<br/>
                        style of the card component can be easily modified with no<br/>
                        need for any custom CSS!
                        </div>
                    </div>
                </div>
                {/* basic card ends */}
            </div>
            <div className="col-lg-6">
                {/* dropdown card starts */}
                <div className="card mb-4">
                    <div className="card-header text-primary fw-bold d-flex justify-content-between">
                    <div>Dropdown Card Example</div>

                    <div className="vertical-dots-icon">
                <BiDotsVerticalRounded
                  className="biDotsVerticalRounded"
                  size={25}
                  onClick={() => {
                    setDropdownCardVerticalDot(!dropdownCardVerticalDot);
                    // set menus to go under vertical dot
                    setList({
                      "DORPDOWN HEADER": [
                        "Action",
                        "Another action",
                        "Something else here",
                      ],
                    });
                  }}
                />
                {dropdownCardVerticalDot ? (
                  <div className="earning-expandedMenu">
                    <ExpandedMenu list={list} />
                  </div>
                ) : (
                  ""
                )}
              </div>
                    </div>

                    <div className="card-body">
                        <div className="card-text text-secondary">
                        Dropdown menus can be placed in the card header in order to<br/>
                        extend the functionality of a basic card. In this dropdown card<br/>
                        example, the Font Awesome vertical ellipsis icon in the card<br/>
                        header can be clicked on in order to toggle a dropdown menu.
                        </div>
                    </div>
                </div>
                {/* dropdown card ends */}

                {/* collapsable card starts */}
                <div className="card mb-4">
                    <div className="card-header">
                        <a href="#collapsable-card-body" className="collapsable-card text-primary d-flex justify-content-between" data-bs-toggle="collapse" role="button" aria-expanded="false">
                            <div className="fw-bold">Collapsable Card Example</div>
                        </a>
                    </div>
                    <div className="card-body collapse text-secondary" id="collapsable-card-body">
                    This is a collapsable card example using Bootstrap's built in<br/>
                    collapse functionality. <span className="fw-bold">Click on the card header</span> to see the card<br/>
                    body collapse and expand!
                    </div>
                </div>
                {/* collapsable card ends */}

            </div>
        </div>
        {/* 4 cards end */}
    </div>
  );
}