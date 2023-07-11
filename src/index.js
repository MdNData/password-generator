import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { GetMain } from "./components/Main";
import "./styles/index.css";

//Main component
const PageContainer = () => {
  return (
    //React.Fragment return an element without using a html element, empty <> </> can also be used
    <React.Fragment>
      {/* START Header */}
      <Header
        mainTitle="Password Generator"
        secondTitle="Random, Secure and Free"
      />
      {/* END Header */}

      {/* START Main */}
      <GetMain />
      {/* END Main */}

      <a
        className="download-app"
        href="https://codexency.com/apps/com.companyname.password_generator_app_maui.apk"
      >
        Download Android App
      </a>
    </React.Fragment>
  );
};

//Obtain the main div for the app from the main page
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render the page
root.render(<PageContainer />);
