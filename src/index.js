<<<<<<< HEAD
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
    </React.Fragment>
  );
};

//Obtain the main div for the app from the main page
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render the page
root.render(<PageContainer />);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> 74aaec50cbee3f2154ff6fad4adcb96a4817e6dd
