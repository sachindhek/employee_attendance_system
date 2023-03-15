import React, { useState } from "react";
import axios from "axios";
import { defaultEmployee, EmployeeType } from "../../model";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Grid, TextField, Typography, Button } from "@mui/material";

const AddEmployee = () => {
  const [employee, setEmployee] = useState<EmployeeType>({
    ...defaultEmployee,
  });

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const submitValidDetails = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/addEmployee", {
        emp_id: employee.emp_id,
        emp_name: employee.emp_name,
        emp_email: employee.emp_email,
        emp_phone: employee.emp_phone,
        emp_address: employee.emp_address,
        emp_password: employee.emp_password,
      })
      .then((res) => console.log("response from api", res.data))
      .catch((err) => {
        console.log(err.message);
      });

    setEmployee({ ...employee, ...defaultEmployee });
  };

  // console.log("employee :", employee);
  // console.log("employee.emp_id:", employee.emp_id);

  return (
    <>
      <Grid container>
        <Grid container display="flex">
          <Grid
            item
            xl={12}
            md={12}
            lg={12}
            sm={12}
            xs={12}
            style={{ textAlign: "center", padding: "20px" }}
          >
            <Typography variant="h4"> Register Here </Typography>
          </Grid>
          <Grid container style={{ textAlign: "center" }}>
            <Grid item xl={12} md={12} xs={12} lg={12}>
              <FormControl sx={{ width: "50ch", m: 1 }}>
                <OutlinedInput
                  placeholder="Employee ID"
                  type="text"
                  name="emp_id"
                  value={employee.emp_id}
                  onChange={(e) => onChangeInput(e)}
                />
                {/* <Typography variant="subtitle2">{error.id_error}</Typography> */}
              </FormControl>
            </Grid>
            <Grid item xl={12} md={12} xs={12} lg={12} sm={12}>
              <FormControl sx={{ width: "50ch", m: 1 }}>
                <OutlinedInput
                  placeholder="Empolyee Name"
                  type="text"
                  name="emp_name"
                  value={employee.emp_name}
                  onChange={(e) => onChangeInput(e)}
                />
                {/* <Typography variant="subtitle2">
                    {error.name_error}
                  </Typography> */}
              </FormControl>
            </Grid>
            <Grid item xl={12} md={12} sm={12} lg={12} xs={12}>
              <FormControl sx={{ width: "50ch", m: 1 }}>
                <OutlinedInput
                  placeholder="Email"
                  type="email"
                  name="emp_email"
                  value={employee.emp_email}
                  onChange={(e) => onChangeInput(e)}
                />
                {/* <Typography variant="subtitle2">
                    {error.email_error}
                  </Typography> */}
              </FormControl>
            </Grid>
            <Grid item xl={12} md={12} sm={12} lg={12} xs={12}>
              <FormControl sx={{ width: "50ch", m: 1 }}>
                <OutlinedInput
                  placeholder="Phone"
                  type="number"
                  name="emp_phone"
                  value={employee.emp_phone}
                  onChange={(e) => onChangeInput(e)}
                />
                {/* <Typography variant="subtitle2">
                    {error.phone_error}
                  </Typography> */}
              </FormControl>
            </Grid>
            <Grid item xl={12} md={12} xs={12} sm={12} lg={12}>
              <FormControl sx={{ width: "50ch", m: 1 }}>
                <TextField
                  aria-label="empty textarea"
                  placeholder="Enter Your Address"
                  style={{ width: "50ch" }}
                  rows="6"
                  type="text"
                  name="emp_address"
                  value={employee.emp_address}
                  onChange={(e) => onChangeInput(e)}
                />
                {/* <Typography variant="subtitle2">
                    {error.address_error}
                  </Typography> */}
              </FormControl>
            </Grid>
            <Grid item xl={12} md={12} sm={12} lg={12} xs={12}>
              <FormControl sx={{ width: "50ch", m: 1 }}>
                <OutlinedInput
                  placeholder="Password"
                  type="password"
                  name="emp_password"
                  value={employee.emp_password}
                  onChange={(e) => onChangeInput(e)}
                />
                {/* <Typography variant="subtitle2">
                    {error.phone_error}
                  </Typography> */}
              </FormControl>
            </Grid>
            <Grid item xl={12} md={12} xs={12} sm={12} lg={12}>
              <FormControl sx={{ m: 1 }}>
                <Button
                  onClick={submitValidDetails}
                  variant="contained"
                  color="success"
                  size="large"
                >
                  Submit
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AddEmployee;
