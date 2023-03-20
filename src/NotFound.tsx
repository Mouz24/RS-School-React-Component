import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  console.log("notfound");
    return (
      <div>
      <h1>Ooops! Not found! 404</h1>
      <Link to="/"> Get Back</Link>
      </div>
    );
}

export default NotFound;
