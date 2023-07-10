import React from "react";
import ReactDOM from "react-dom/client";

//Main component
const PageContainer = () => {
  return (
    //React.Fragment return an element without using a html element, empty <> </> can also be used
    <React.Fragment>
      
    </React.Fragment>
  );
};

//Obtain the main div for the app from the main page
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render the page
root.render(<PageContainer />);
