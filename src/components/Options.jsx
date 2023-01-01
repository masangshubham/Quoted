import React from "react";
import { UilImageDownload } from "@iconscout/react-unicons";

function Options(props) {
  return (
    <div className="flex justify-center">
      <div className="absolute flex justify-center lg:bottom-56 md:bottom-40 sm:bottom-10">
        <button
          onClick={props.onInput}
          className="p-3 px-9 bg-slate-800 text-white rounded-3xl font-poppins font-semibold"
        >
          Custom Input
        </button>
        <span
          id={props.id}
          className="px-9 hover:cursor-pointer"
          onClick={props.onDownload}
        >
          <UilImageDownload size="40" />
        </span>
        <button
          className="p-3 px-9 bg-slate-800 text-white rounded-3xl font-poppins font-semibold"
          onClick={props.onclick}
        >
          Generate New
        </button>
      </div>
    </div>
  );
}

export default Options;
