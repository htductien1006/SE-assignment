import loginBg from "../../assets/login/login-bg.jpg";
// import "./index.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {  
  import("./index.css");
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <img src={loginBg} className="loginPhoto" />
      <div className="login-frame">
        <div className="login-logo">
          {/* <img src={loginBg} width="200px" height="100px" /> */}
          <Button
            sx={{
              height: "100px",
              width: "200px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              fontSize: "23px",
              backgroundColor: "#C2FFBD",
              color: "black",
              "&:hover": {
                background: "#B1E8AC",
              },
            }}
            // variant="contained"
          >
            LOGO
          </Button>
        </div>
        <div className="login-form">
          <div>
            <div className="input-label">Tên đăng nhập</div>
            <TextField
              variant="filled"
              label="Username"
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                border: "none",
              }}
              fullWidth
            />
          </div>

          <div>
            <div className="input-label">Mật khẩu</div>
            <TextField
              variant="filled"
              fullWidth
              label="Password"
              type="password"
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            />
          </div>
          <div className="checkbox">
            <Checkbox defaultChecked />
            <span>Nhớ tài khoản này</span>
          </div>
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C2FFBD",
            color: "black",
            "&:hover": {
              background: "#B1E8AC",
            },
            width: "30%",
            margin: "0 auto",
          }}
          onClick={() => navigate("/dashboard")}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default Login;
