import React from "react";
import { Button } from "..";

const IconButton = ({ handler, className, children, ...props }) => {
  return <Button>{children}</Button>;
};

export { IconButton as default };
