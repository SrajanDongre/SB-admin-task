import "./Content.css";

export function EarningCards({value}){
    const cds = value;
    console.log(cds[0].title);
    return(
        <div className="card-container d-lg-flex justify-content-between mx-4 my-5">
            {cds.map((obj,index) => {
                return <div key={index} className="card-holder bg-white px-4 d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column gap-1">
                    <div className="title">{obj.title}</div>
                    <div className="amount">{obj.amount}</div>
                </div>
                <div className="icon">{obj.icon}</div>
                </div>
            })}
        </div>
    )
}