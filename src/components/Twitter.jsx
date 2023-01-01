import React, { PureComponent } from "react";
import { UilTwitter } from "@iconscout/react-unicons";

function Twitter(props) {
  return (
    <button
      onClick={props.onclick}
      className="absolute top-2 left-2 hover:cursor-pointer"
    >
      <UilTwitter size="50" color="#0092E4" />
    </button>
  );
}

export default Twitter;
