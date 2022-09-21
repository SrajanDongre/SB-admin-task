import ProgressBar from 'react-bootstrap/ProgressBar';

export function Projects(){
    const proj = [
        {
            name:"Server Migration",
            percent:20,
            color:"danger"
        },
        {
            name:"Sales Tracking",
            percent:40,
            color:"warning"
        },
        {
            name:"Customer Database",
            percent:60,
            color:"primary"
        },
        {
            name:"Payout Details",
            percent:80,
            color:"info"
        },
        {
            name:"Account Setup",
            percent:100,
            color:"success"
        },
    ]
    return(
        <div className="d-flex flex-column gap-4">
            {proj.map((obj,index) => {
               return<div key={index}>
                <div className="d-flex justify-content-between">
                <div className="project-name">{obj.name}</div>
                <div className="project-percent">{`${obj.percent}%`}</div>
            </div>
            <div>
                <ProgressBar now={obj.percent} variant={obj.color} />
            </div>
               </div> 
            })}
        </div>  
    )
}