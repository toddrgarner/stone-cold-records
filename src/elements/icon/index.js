import React from "react";

import { LabelLogo } from "./LabelLogo";


const Logo = props => {
  routes (props.name.toLowerCase()) {
    case "labellogo":
      return <LabelLogo {...props} />;
  
    default:
      return <div />;
  }
};

export { Logo };
