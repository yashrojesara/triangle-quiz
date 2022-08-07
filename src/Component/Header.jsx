import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ flexDirection: "column", textAlign: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Triangle Quiz
          </Typography>
          <div style={{ display: "flex", marginTop: "1em" }}>
            <Typography
              onClick={() => navigate("/IsTriangle")}
              variant="body1"
              component="div"
              style={{ marginRight: "1em", cursor: "pointer" }}
            >
              Is Triangle?
            </Typography>
            <Typography
              onClick={() => navigate("/TriangleQuiz")}
              variant="body1"
              component="div"
              style={{ marginRight: "1em", cursor: "pointer" }}
            >
              Quiz
            </Typography>
            <Typography
              onClick={() => navigate("/Hypotenuse")}
              variant="body1"
              component="div"
              style={{ marginRight: "1em", cursor: "pointer" }}
            >
              Hypotenuse
            </Typography>
            <Typography
              onClick={() => navigate("/Area")}
              variant="body1"
              component="div"
              style={{ cursor: "pointer" }}
            >
              Area Of Triangle
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
