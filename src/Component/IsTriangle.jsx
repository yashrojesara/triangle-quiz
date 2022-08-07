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

function IsTriangle() {
  const classes = useStyles();

  const [angle1, setAngle1] = React.useState(0);
  const [angle2, setAngle2] = React.useState(0);
  const [angle3, setAngle3] = React.useState(0);
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const onClick = () => {
    setIsButtonClicked(true);
    const isAngleZero = angle1 <= 0 || angle2 <= 0 || angle3 <= 0;
    if (isAngleZero) {
      setMessage("Please enter valid angles");
    } else {
      const isTriangle = +angle1 + +angle2 + +angle3 === 180;
      setMessage(
        isTriangle ? "yay It's Triangle 🎉🎉" : "Oops, It's Not a Triangle 😢"
      );
    }
  };

  return (
    <div className={classes.root}>
      <Typography
        style={{ fontWeight: "bold", marginBottom: "1em" }}
        variant="h5"
      >
        Is Triangle?
      </Typography>
      <TextField
        style={{ marginBottom: "1em" }}
        label="Angle 1"
        value={angle1}
        onChange={(e) => setAngle1(e.target.value && parseInt(e.target.value))}
        variant="outlined"
        type="number"
        required
      />
      <TextField
        style={{ marginBottom: "1em" }}
        label="Angle 2"
        value={angle2}
        onChange={(e) => setAngle2(e.target.value && parseInt(e.target.value))}
        variant="outlined"
        type="number"
        required
      />
      <TextField
        style={{ marginBottom: "1em" }}
        label="Angle 3"
        value={angle3}
        onChange={(e) => setAngle3(e.target.value && parseInt(e.target.value))}
        variant="outlined"
        type="number"
        required
      />

      <Button
        disabled={!(angle1 && angle2 && angle3)}
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
          }}
          variant="body1"
        >
          {message}
        </Typography>
      )}
    </div>
  );
}

export default IsTriangle;
