import { Request, Response } from "express";
const queries = require("../service/queries");
const jwt = require("jsonwebtoken");

// const generateToken = async (req: Request, res: Response) => {
//   const { emp_email } = req.body;
//   await jwt.sign(
//     { emp_email: emp_email },
//     process.env.JWT_ACCESS_SECRET,
//     (err: any, token: any) => {
//       res.json({
//         token,
//       });
//     }
//   );
// };

const loginEmployee = async (req: Request, res: Response) => {
  const { emp_email, emp_password } = req.body;

  const user = await queries.employeeLogin(emp_email, emp_password);
  //console.log(user)
  if (!user.length) {
    res.status(400).json({
      status: 400,
      data: "",
      success: false,
      message: "wrong user authenticated, please check your email or password",
    });
  } else {
    jwt.sign(
      { user: user },
      process.env.JWT_ACCESS_SECRET,
      (err: any, token: any) => {
        res.json({
          token,
        });
      }
    );

    // res.status(200).json({
    //   status: 200,
    //   data: user[0],
    //   success: true,
    //   message: "success",
    //   generateToken,
    // });
  }
};

const postEmployee = async (req: Request, res: Response) => {
  const { emp_id, emp_name, emp_email, emp_phone, emp_address, emp_password } =
    req.body;
  if (
    emp_id === "" &&
    emp_email === "" &&
    emp_name === "" &&
    emp_phone === "" &&
    emp_address === "" &&
    emp_password === ""
  ) {
    res.json({ message: "all field are required" });
  }
  if (emp_id === "") {
    res.json({ emp_id: "emp_id is empty" });
  }
  if (emp_name === "") {
    res.json({ emp_name: "emp_name is empty" });
  }
  if (emp_email === "") {
    res.json({ emp_email: "emp_name is empty" });
  }
  if (emp_phone === "") {
    res.json({ emp_phone: "emp_phone is empty" });
  }
  if (emp_address === "") {
    res.json({ emp_address: "emp_address is empty" });
  }
  if (emp_password === "") {
    res.json({ emp_address: "emp_password is empty" });
  } else {
    const employeeData = await queries.insertEmployee(
      emp_id,
      emp_name,
      emp_email,
      emp_phone,
      emp_address,
      emp_password + Math.floor(Math.random() * 100 + 1)
    );
    res.status(200).json(employeeData);
  }
};

module.exports = { loginEmployee, postEmployee };

// jwt.verify(req.token, "secretkey", (err, authData) => {
//   if (err) {
//     res.sendStatus(403);
//   } else {
//     res.json({
//       message: "POST created...",
//       authData
//     });
//   }
// });
// });

// jwt.sign({ user: user }, "secretkey", (err, token) => {
//   res.json({
//     token
//   });
// }
