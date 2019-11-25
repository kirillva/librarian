import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

const Button = ({ handler, className, children, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(styles.button, className)}
      onClick={e => {
        handler(e, props);
      }}
    >
      {children}
    </div>
  );
};

export { Button as default };
