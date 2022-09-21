import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Colors.css";
import {textColors} from "./Components/TextColors";
import {bfGradients} from "./Components/Gradients"
import {grayScaleBg} from "./Components/GrayscaleBg";

export function Colors(){
    return(
        <div className="mx-4 d-flex flex-column gap-4">
            <div className="header d-flex flex-column">
                <div className="dashboard-text">
                    Color Utilities
                </div>
                <div className="text-secondary">
                Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="_blank" rel="noreferrer" className="bootstrap-link">Bootstrap Documentation</a> page. 
                The custom utilities below were created to<br/>extend this theme past the default utility classes built into Bootstrap's framework.
                </div>
            </div>
            {/* header ends */}
            {/* cards start */}
            <div className="row">
                <div className="col-lg-4">
                    {/* text color card starts */}
                    <div className="card mb-4">
                        <div className="card-header text-primary fw-bold">
                        Custom Text Color Utilities
                        </div>
                        {/* color palette */}
                        <div className="mx-4 my-4 d-flex flex-column">
                            {textColors.map((obj,index) => {
                                return <TextColor key="index" background={obj.background} text={obj.text}  />
                            })}
                        </div>
                    </div>
                    {/* text color card ends */}

                     {/* text color card starts */}
                     <div className="card mb-4">
                     <div className="card-header text-primary fw-bold">
                     Custom Font Size Utilities
                     </div>
                     {/* color palette */}
                     <div className="card-body mx-3">
                        <p className="fs-6">.text-xs</p>
                        <p className="fs-3">.text-lg</p>
                     </div>
                 </div>
                 {/* text color card ends */}
                </div>

                {/* bg gradient card starts */}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header text-wrap text-primary fw-bold">
                        Custom Background Gradient Utilities
                        </div>
                        <div className="mx-4 my-4 d-flex flex-column">
                        {bfGradients.map((obj,index) => {
                            return <BgGradient key="index" background={obj.background} text={obj.text}  />
                        })}
                    </div>
                    </div> 
                </div>
                {/* bg gradient card ends */}

                {/* grayscale card starts */}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header text-wrap text-primary fw-bold">
                        Custom Background Gradient Utilities
                        </div>
                        <div className="mx-4 my-4 d-flex flex-column">
                        {grayScaleBg.map((obj,index) => {
                            return <GrayScaleBg key="index" background={obj.background} text={obj.text} content={obj.content}  />
                        })}
                    </div>
                    </div> 
                </div>
                {/* grayscale card ends */}
            </div>
            {/* cards end */}
        </div>
    )
}

function TextColor({background,text}){
    let bg=`p-3 ${background}`;
    return(
        <div className={bg}><p className={text}>{`.${text}`}</p></div>
    )
}

function BgGradient({background,text,content}){
    let bg=`px-3 py-5 ${background}`;
    return(
        <div className={bg}><p className="text-white">{`.${text}`}</p></div>
    )
}

function GrayScaleBg({background,text,content}){
    let bg=`p-3 ${background}`;
    return(
        <div className={bg}><p className={text}>{`.${content}`}</p></div>
    )
}