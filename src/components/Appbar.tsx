import React from "react";
import Searchbar from "./Searchbar";

const Appbar = () => {
  return (
    <div className="flex justify-between mt-4">
      <div>Youtube</div>
      <div>
        <Searchbar />
      </div>
      <div>Signin</div>
    </div>
  );
};

export default Appbar;
