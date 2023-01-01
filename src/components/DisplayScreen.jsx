import React from "react";

function DisplayScreen(props) {
  return (
    <div className="flex justify-center">
      <div className="absolute top-32 ">
        <div id={props.id} className="flex items-center justify-center h-326 md:w-545 rounded-xl bg-white ">
          <p className="mx-8 text-center font-poppins font-semibold text-2xl">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DisplayScreen;
