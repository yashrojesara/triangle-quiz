import Header from "./Component/Header";
import { makeStyles } from "@mui/styles";
import Footer from "./Component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IsTriangle from "./Component/IsTriangle";
import TriangleArea from "./Component/TriangleArea";
import Hypotenuse from "./Component/Hypotenuse";
import TriangleQuiz from "./Component/TriangleQuiz";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/IsTriangle" element={<IsTriangle />} />
          <Route path="/Area" element={<TriangleArea />} />
          <Route path="/Hypotenuse" element={<Hypotenuse />} />
          <Route path="/TriangleQuiz" element={<TriangleQuiz />} />
          <Route path="*" exact element={<IsTriangle />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
