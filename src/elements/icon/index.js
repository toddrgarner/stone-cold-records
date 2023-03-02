import React from "react";

import { LabelLogo } from "./LabelLogo";


const Icon = props => {
  switch (props.name.toLowerCase()) {
    case "labellogo":
      return <LabelLogo {...props} />;
  
    default:
      return <div />;
  }
};

export { Icon };
