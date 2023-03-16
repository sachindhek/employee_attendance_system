import React, { useState } from "react";
import axios from "axios";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { LoginType, defaultLoginType } from "../../model";
import { Box, Typography, Button, TextField } from "@mui/material";

const Login = () => {
  const [logindetail, setLogInDetail] = useState<LoginType>({
    ...defaultLoginType,
  });

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setLogInDetail({ ...logindetail, [name]: value });
  };

  const submitLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/api/login", {
        emp_email: logindetail.emp_email,
        emp_password: logindetail.emp_password,
      })
      .then((res) => {
        console.log(res);
        const { token } = res.data;
        localStorage.setItem("token", token);
        localStorage.getItem("token");
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLogInDetail({ ...logindetail, ...defaultLoginType });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Sign in</Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="Email Address"
              name="emp_email"
              value={logindetail.emp_email}
              onChange={onChangeInput}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="emp_password"
              label="Password"
              type="password"
              value={logindetail.emp_password}
              onChange={onChangeInput}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitLogin}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
