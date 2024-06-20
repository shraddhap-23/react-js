import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether datk mode is enabale or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enable", "success");
      document.title = "Zara - Dark mode";

      // setInterval(()=>{
      //   document.title = 'Zarz is Amazing mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install Zara Now';
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
      document.title = "Zara - light mode";
    }
  };

  // const toggleNav = () => {
  //   if (nav === "light") {
  //     setNav("dark");
  //     document.body.style.backgroundColor = "#9da0a4";
  //   } else {
  //     setNav("light");
  //     document.body.style.backgroundColor = "white";
  //   }

  // }
  return (
    <>
      <Route>
        <Navbar
          title="Zara"
          aboutText="About Text"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter The text analyzed below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Route>
    </>
  );
}
export default App;
