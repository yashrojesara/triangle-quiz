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

function TriangleArea() {
  const classes = useStyles();

  const [area1, setArea1] = React.useState(0);
  const [area2, setArea2] = React.useState(0);
  const [area3, setArea3] = React.useState(0);
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const onClick = () => {
    setIsButtonClicked(true);
    const isAngleZero = area1 <= 0 || area2 <= 0 || area3 <= 0;
    if (isAngleZero) {
      setMessage("Please enter valid angles");
    } else {
      if (
        area1 + area2 > area3 &&
        area2 + area3 > area1 &&
        area1 + area3 > area2
      ) {
        const semiPerimeter = (area1 + area2 + area3) / 2;

        const result = Math.sqrt(
          semiPerimeter *
            (semiPerimeter - area1) *
            (semiPerimeter - area2) *
            (semiPerimeter - area3)
        ).toFixed(2);
        setMessage(`The area of the triangle is ${result}`);
      } else {
        setMessage("Given inputs does not form a triangle");
      }
    }
  };

  return (
    <div className={classes.root}>
      <Typography
        style={{ fontWeight: "bold", marginBottom: "1em" }}
        variant="h5"
      >
        Enter 3 Sides of Triangle and Get Area
      </Typography>
      <TextField
        style={{ marginBottom: "1em" }}
        label="First Side"
        value={area1}
        onChange={(e) => setArea1(e.target.value && parseInt(e.target.value))}
        variant="outlined"
        type="number"
        required
      />
      <TextField
        style={{ marginBottom: "1em" }}
        label="Second Side"
        value={area2}
        onChange={(e) => setArea2(e.target.value && parseInt(e.target.value))}
        variant="outlined"
        type="number"
        required
      />
      <TextField
        style={{ marginBottom: "1em" }}
        label="Third Side"
        value={area3}
        onChange={(e) => setArea3(e.target.value && parseInt(e.target.value))}
        variant="outlined"
        type="number"
        required
      />

      <Button
        disabled={!(area1 && area2 && area3)}
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

export default TriangleArea;
