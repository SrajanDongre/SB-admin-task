import "./Content.css";
import {Dashboard} from "./Dashboard";
import {Buttons} from "./Buttons";
import {Cards} from "./Cards";
import {Colors} from "./Colors";
import {Borders} from "./Borders";
import {Animations} from "./Animations";
import {Other} from "./Other";
import {Charts} from "./Charts";
import {Tables} from "./Tables";
import {Page404} from "./ErrorPages/Page404";
import {BlankPage} from "./ErrorPages/BlankPage";

export function Content({page}){
    // console.log(`inside content ${page}`);
    let element="";
    switch(page){
        case "home" :
            element=<Dashboard />;    
            break;
        case "buttons" :
            element=<Buttons />;    
            break;
        case "cards" :
            element=<Cards />;    
            break;
        case "colors" :
            element=<Colors />;    
            break; 
        case "borders" :
            element=<Borders />;    
            break; 
        case "animations" :
            element=<Animations />;    
            break;
        case "other" :
            element=<Other />;    
            break;   
        case "charts" :
            element=<Charts />;    
            break;
        case "tables" :
            element=<Tables />;    
            break;   
        case "404Page" :
            element=<Page404 />;    
            break;   
        case "BlankPage" :
            element=<BlankPage />;    
            break;              
        default:
        element="";  
        break;  
    }
    return(
        <div className="mx-auto w-100">{element}</div>
    )
}
