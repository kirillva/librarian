import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, BaseField } from "..";
import { KeyboardArrowDownIcon } from "resources/icons";

const SelectField = ({
  idProperty = "id",
  valueProperty = "value",
  options,
  optionRenderer = (value) => value,
  onChange = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState();
  const [value, _setValue] = useState();
  const [expanded, setExpanded] = useState(-1);

  const setValue = (value) => {
    onChange(value);
    _setValue(value);
  };

  const _optionRenderer = (item, id) => (
    <span key={item[idProperty]} className={styles.item}>
      <div className={styles.optionItemWrapper}>
        <span
          onClick={(e) => {
            setValue(item[idProperty]);
            setText(item[valueProperty]);
            setOpen(false);
          }}
          className={expanded === id ? styles.optionBig : styles.optionLess}
        >
          {optionRenderer(item[valueProperty])}
        </span>
        <span
          onClick={(e) => {
            if (expanded === id) {
              setExpanded(-1);
            } else {
              setExpanded(id);
            }
          }}
        >
          (i)
        </span>
      </div>
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
