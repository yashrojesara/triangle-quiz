import * as React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function RadioComponent(props) {
  const { userAnswers, setUserAnswers } = props;
  const { id, question, options } = props.triangle;
  const [value, setValue] = React.useState();

  const onChange = (e) => {
    setValue(e.target.value);
    const data = userAnswers.filter((item) => item.id === id)[0];
    data.answer = e.target.value;
    setUserAnswers([...userAnswers]);
  };

  return (
    <div style={{ marginBottom: "1.5em" }}>
      <div style={{ fontWeight: "bold" }}>{`${id}.${question}`}</div>
      <RadioGroup
        value={value}
        onChange={(e) => onChange(e)}
        row
        style={{ justifyContent: "center" }}
      >
        {options.map((option) => {
          return (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
}

export default RadioComponent;
