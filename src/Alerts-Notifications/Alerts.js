import "./Alerts.css";


export function AlertsSection({header,alertContent,bottomLink}){
    return(
        <div className="card alert-card">
            <div className="card-header alert-card-header bg-primary text-white">
                {header}
            </div>
            <div className="card-body">
                {alertContent.map((obj,index) => {
                    return <div className="row" key="index">
                    <div className="col-2 alert-icon">
                        <div className={obj.background}>
                            <i>{obj.icon}</i>
                        </div>    
                    </div>
                    <div className="col-10 alert-content">
                        <div className="d-flex flex-column">
                            <div className="alert-date text-secondary">{obj.date}</div>
                            <div className="alert-text text-wrap text-dark">
                            {obj.text}
                            </div>
                        </div>
                    </div>   
                <hr className="mt-2"></hr>
                </div>
                })}
                <div className="bottom-text d-flex justify-content-center">
                <a className="bottom-link text-secondary text-decoration-none" href="#">{bottomLink}</a>
                </div>
            </div>
        </div>
    )
}