import "./Notification.css";


export function NotificationSection({header,notificationContent,bottomLink}){
    return(
        <div className="card notification-card">
            <div className="card-header notification-card-header bg-primary text-white">
                {header}
            </div>
            <div className="card-body">
                {notificationContent.map((obj,index) => {
                    return <div className="row" key="index">
                    <div className="col-2 alert-icon">
                        <div className={obj.background}>
                            <i>{obj.icon}</i>
                        </div>    
                    </div>
                    <div className="col-10 notification-content">
                        <div className="d-flex flex-column">
                            <div className="notification-text text-dark">{obj.text}</div>
                            <div className="notification-name text-wrap text-secondary">
                            {`${obj.name} . ${obj.mins}`}
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