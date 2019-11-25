import React, { useState } from "react";
import styles from "./styles.module.css";

const BaseField = ({ readOnly = false, value = "", children, toolsStart, toolsEnd }) => {
  const [_value, setValue] = useState(value);

  return (
    <div className={styles.fieldWrapper}>
      <div className={styles.inputWrapper}>
        {toolsStart}
        <input
          readOnly={readOnly}
          className={styles.input}
          value={readOnly ? value : _value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        {toolsEnd}
      </div>
      {children}
    </div>
  );
};

export { BaseField as default };
