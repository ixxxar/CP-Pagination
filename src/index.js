import React from "react";
import ReactDom from "react-dom";
import Users from "./compnents/Users";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return <Users />;
};

ReactDom.render(<App />, document.getElementById("root"));
