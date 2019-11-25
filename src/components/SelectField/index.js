import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, BaseField } from "..";
import { KeyboardArrowDownIcon } from "resources/icons";

const SelectField = ({
  idProperty = "id",
  valueProperty = "value",
  options,
  optionRenderer = value => value,
  onChange = () => {}
}) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState();
  const [value, _setValue] = useState();

  const setValue = value => {
    onChange(value);
    _setValue(value);
  };

  const _optionRenderer = item => (
    <span
      key={item[idProperty]}
      className={styles.item}
      onClick={e => {
        setValue(item[idProperty]);
        setText(item[valueProperty]);
        setOpen(false);
      }}
    >
      {optionRenderer(item[valueProperty])}
    </span>
  );

  return (
    <BaseField
      value={text}
      readOnly={true}
      toolsEnd={
        <Button className={styles.button} handler={() => setOpen(!open)}>
          <img src={KeyboardArrowDownIcon} alt="KeyboardArrowDownIcon" />
        </Button>
      }
    >
      <div className={styles.hiddenValue}>{value}</div>
      <div className={styles.optionsWrapper}>
        <div className={styles.options}>{open && options && options.map(_optionRenderer)}</div>
      </div>
    </BaseField>
  );
};

export { SelectField as default };
