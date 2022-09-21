import {borderPropsLeft,borderPropsBottom} from "./Components/BorderProps";
import "./Borders.css";

export function Borders(){
    return(
        <div className="mx-4 d-flex flex-column gap-4">
            <div className="header d-flex flex-column">
                <div className="dashboard-text">
                    Border Utilities
                </div>
                <div className="text-secondary">
                Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="_blank" rel="noreferrer" className="bootstrap-link">Bootstrap Documentation</a> page. 
                The custom utilities below were created to<br/>extend this theme past the default utility classes built into Bootstrap's framework.
                </div>
            </div>
            {/* header ends */}
            {/* cards start */}
            <div className="row">
                {/* first row starts */}
                <div className="col-lg-6">
                            {borderPropsLeft.map((item,index) => {
                                return <BorderCards key={index} background={item} />
                            })}
                </div>
                {/* first row ends */}

                {/* second row starts */}
                <div className="col-lg-6">
                {borderPropsBottom.map((item,index) => {
                                return <BorderCards key={index} background={item} />
                            })}
                </div>
                {/* second row ends */}
            </div>
            {/* cards end */}
        </div>
    )
}

function BorderCards({background}){
    let classNames=`card mb-4 py-3 px-3 ${background}`
    return(
        <div className={classNames}>
        <div clssName="card-body">
            {`.${background}`}
        </div>
        </div>
    )
}