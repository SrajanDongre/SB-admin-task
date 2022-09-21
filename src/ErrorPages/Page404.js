import "./Page404.css";
import {Link} from "react-router-dom";

export function Page404(){
    return(
        <div className="container">
            <div className="text-center">
                <div className="d-flex flex-column">
                    <div className="text-404 text-secondary">404</div>
                    <div className="pageNotFound-text text-dark fs-5">Page Not Found</div>

                    <div className="found-glitch-text mt-5 text-secondary">It looks like you found a glitch in the matrix...</div>
                    <Link to="/" className="back-to-dashboard text-decoration-none">← Back to Dashboard</Link>
                </div>
            </div>
        </div>
    )
}