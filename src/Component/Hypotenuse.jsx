import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField, Typography } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

function Hypotenuse() {
  const classes = useStyles();

  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const onClick = () => {
    setIsButtonClicked(true);
    const isZero = a <= 0 || b <= 0;
    if (isZero) {
      setMessage("Please enter valid values");
    } else {
      const hypotenuse = Math.sqrt(a ** 2 + b ** 2).toFixed(2);
      setMessage(`The hypotenuse is ${hypotenuse}`);
    }
  };

  return (
    <div className={classes.root}>
      <Typography
        style={{ fontWeight: "bold", marginBottom: "1em" }}
        variant="h5"
      >
        Calculate Hypotenuse of a triangle
      </Typography>
      <TextField
        style={{ marginBottom: "1em" }}
        label="Enter base value (a)"
        value={a}
        onChange={(e) => setA(e.target.value && parseInt(e.target.value))}
        variant="outlined"
        type="number"
        required
      />
      <TextField
        style={{ marginBottom: "1em" }}
        label="Enter base value (b)"
        value={b}
        onChange={(e) => setB(e.target.value && parseInt(e.target.value))}
        variant="outlined"
        type="number"
        required
      />

      <Button
        disabled={!(a && b)}
        onClick={onClick}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>

      {isButtonClicked && (
        <Typography
          style={{
            marginTop: "1em",
            fontSize: "18px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
          variant="body1"
        >
          {message}
        </Typography>
      )}
    </div>
  );
}

export default Hypotenuse;
