import Image from "next/image";
import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "../src/components/Login";
import SignUp from "../src/components/SignUp";
import img from "../public/images/tax.png"
function App() {
  const [state, setstate] = React.useState("signup");
  const routeToLogin = () => {
    setstate("login");
  };
  const routeToSignup = () => {
    setstate("signup");
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="navbar-brand">Travel-Colab</div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-link" onClick={routeToLogin}>
                  Login
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={routeToSignup}>
                  Sign up
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{position:"absolute",top:"30%",left:"0%"}}>
      <Image src={img} height={"450px"} width={"600px"}></Image>
      </div>
      
      <div className="auth-wrapper">
        <div className="auth-inner">
          {state == "login" ? <Login setState={setstate} /> : <SignUp setState={setstate}/>}
        </div>
      </div>
    </div>
  );
}
export default App;

// export default function Home() {
//   return <Login></Login>;
// }
