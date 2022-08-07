import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import RadioComponent from "./RadioComponent";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
});

function TriangleQuiz() {
  const classes = useStyles();
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [userAnswers, setUserAnswers] = React.useState([
    { id: 1, answer: "" },
    { id: 2, answer: "" },
    { id: 3, answer: "" },
    { id: 4, answer: "" },
  ]);

  const triangleQUiz = [
    {
      id: 1,
      question: "How many sides does a triangle have?",
      answer: "3",
      options: ["3", "4", "5", "6"],
    },
    {
      id: 2,
      question: "Triangle with sides of length 1, 1, and 1 is called?",
      answer: "Equilateral",
      options: ["Equilateral", "Isosceles", "Scalene", "Right"],
    },
    {
      id: 3,
      question:
        "Triangle have three sides of equal length, but one is longer than the other two. This is called?",
      answer: "Isosceles",
      options: ["Equilateral", "Isosceles", "Scalene", "Right"],
    },
    {
      id: 4,
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      answer: "90°",
      options: ["90°", "60°", "30°", "45°"],
    },
  ];

  const onClick = () => {
    setIsButtonClicked(true);
    setMessage("");

    const correctAnswers = userAnswers.filter(
      (item) =>
        item.answer === triangleQUiz.filter((i) => i.id === item.id)[0].answer
    );
    setMessage(
      `You got ${correctAnswers.length} out of ${triangleQUiz.length} correct`
    );
  };

  return (
    <div className={classes.root}>
      <Typography
        style={{ fontWeight: "bold", marginBottom: "1em" }}
        variant="h5"
      >
        Quiz
      </Typography>

      {triangleQUiz.map((triangle) => {
        return (
          <RadioComponent
            key={triangle.id}
            triangle={triangle}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
        );
      })}

      <Button
        disabled={
          userAnswers.filter((item) => {
            return item.answer === "";
          }).length > 0
        }
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

export default TriangleQuiz;
