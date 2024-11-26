import React from "react";
import Searchbar from "./Searchbar";

const Appbar = () => {
  return (
    <div className="flex justify-between mt-4">
      <div className="inline-flex items-center pl-4">Youtube</div>
      <div>
        <Searchbar />
      </div>
      <div className="inline-flex items-center pr-4">Signin</div>
    </div>
  );
};

export default Appbar;
