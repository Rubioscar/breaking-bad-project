import "scss/inputs.scss";
import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";

const collectionValueTypes = {
  NUMBER: "number",
  STRING: "string",
};

const SelectInput = ({
  inputProps,
  data,
  className,
  classSelectField,
  onChange,
  collectionValueType,
  label,
  uncontrolled,
  value,
  readOnly,
}) => {
  const onInputChange = useCallback(
    (event) => {
      let {
        target: { value },
      } = event;

      if (!value) {
        return false;
      }

      switch (collectionValueType) {
        case collectionValueTypes.NUMBER:
          value = parseInt(value, 10);
          break;
        default:
      }
      const resultado = data.find((option) => option.id === value);
      onChange(value, resultado);
      return true;
    },
    [collectionValueType, data, onChange]
  );

  const selectElementProps = useMemo(() => {
    const selectElementPropsList = {};
    if (!uncontrolled) {
      const selectValue = value || "";
      selectElementPropsList.value = selectValue;
    }

    return { ...selectElementPropsList, ...inputProps };
  }, [inputProps, uncontrolled, value]);

  const selectElements = (
    <span>
      <FormControl variant="standard" className={`select ${className}`}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          disabled={readOnly}
          onChange={onInputChange}
          className={`field ${classSelectField}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...selectElementProps}
        >
          {data.map((dataElement) => (
            <MenuItem key={dataElement.code} value={dataElement.code}>
              {dataElement.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </span>
  );
  return selectElements;
};

SelectInput.defaultProps = {
  inputProps: null,
  label: null,
  onChange: () => null,
  collectionValueType: null,
  uncontrolled: false,
  value: "",
  className: "",
  classSelectField: "",
  readOnly: false,
};

SelectInput.propTypes = {
  inputProps: PropTypes.objectOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  collectionValueType: PropTypes.oneOf(Object.values(collectionValueTypes)),
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  uncontrolled: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

export default SelectInput;
