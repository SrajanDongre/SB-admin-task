
import {SideBar} from './Sidebar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Content} from "./Content.js";
import {Header} from "./Header";
import "./App.css";
import {LoginPage} from "./LoginPage/LoginPage.js";
import {RegisterPage} from "./Register/Register";
import {ForgotPasswordPage} from "./ForgotPassword/ForgotPassword";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage content="home" />} />
          <Route path="/buttons" element={<HomePage content="buttons" />} />
          <Route path="/cards" element={<HomePage content="cards" />} />
          <Route path="/Colors" element={<HomePage content="colors" />} />
          <Route path="/Borders" element={<HomePage content="borders" />} />
          <Route path="/Animations" element={<HomePage content="animations" />} />
          <Route path="/Other" element={<HomePage content="other" />} />
          <Route path="/charts" element={<HomePage content="charts" />} />
          <Route path="/tables" element={<HomePage content="tables" />} />
          <Route path="/404Page" element={<HomePage content="404Page" />} />
          <Route path="/BlankPage" element={<HomePage content="BlankPage" />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


//keeping side navigation and top notification bar constant - content of the body is changed
//based on the route path
function HomePage({content}){
console.log(`inside content ${content}`);
  return(
    <div className="d-flex">
      <SideBar />
      <div className="d-flex flex-column w-100 gap-4">
      <Header />
      <Content page={content} />
      </div>
    </div>
  )
}


export default App;
