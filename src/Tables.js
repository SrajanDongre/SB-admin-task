import "./Tables.css"
import {Table} from "./Components/Table";

export function Tables(){
    return(
        <div className="mx-4 d-flex flex-column gap-4">
            <div className="header d-flex flex-column">
                <div className="dashboard-text">
                Tables
                </div>
                <div className="text-secondary">
                DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the<br/>
                <span><a href="https://datatables.net/" className="tables-link" target="_blank" rel="noreferrer">official DataTables documentation.</a></span>
                </div>
            </div>
            {/* header ends */}

            {/* card  -table starts */}
            <div className="card">
                <div className="card-header text-primary fw-bold">
                    DataTables Example
                </div>
                <div className="card-body">
                <Table />
            </div>
            </div>
            {/* card  -table ends */}

        </div>    
    )
}