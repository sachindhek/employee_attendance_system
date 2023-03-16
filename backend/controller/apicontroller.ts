import { Request, Response } from "express";
const queries = require("../service/queries");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const loginEmployee = async (req: Request, res: Response) => {
  const { id, emp_email, emp_password } = req.body;

  const user = await queries.employeeLogin(id, emp_email, emp_password);
  if (!user.length) {
    res.status(400).json({
      status: 400,
      data: "",
      success: false,
      message: "wrong user authenticated, please check your email or password",
    });
  } else {
    jwt.sign(
      { id: user[0].id },
      process.env.JWT_ACCESS_SECRET,
      (err: any, token: any) => {
        res.json({
          token,
        });
      }
    );
  }
};

const postEmployee = async (req: Request, res: Response) => {
  const { body } = req.body;
  const blogSchema = Joi.object({
    emp_id: Joi.string().required(),
    emp_name: Joi.string().required(),
    emp_email: Joi.string().required(),
    emp_address: Joi.string().required(),
    emp_password: Joi.string().required(),
  });
  const result = blogSchema.validate(req.body);
  const { value, error } = result;
  const valid = error == null;

  if (!valid) {
    res.status(422).json({
      message: "please check all field",
      data: body,
    });
  } else {
    const employeeData = await queries.insertEmployee(
      body.emp_id,
      body.emp_name,
      body.emp_email,
      body.emp_phone,
      body.emp_address,
      body.emp_password + Math.floor(Math.random() * 100 + 1)
    );
    res.status(200).json(employeeData);
  }
};

const postTimeLog = async (req: Request, res: Response) => {
  // const { id, intime, outTime } = req.body;
  // // new Date().getTime();
  // const timeLog = await queries.addtimelog(id, intime, outTime);
  // const token = req.header("auth-token");
  // const str = jwt.verify(
  //   token,
  //   process.env.JWT_ACCESS_SECRET,
  //   (err: any, authdata: any) => {
  //     if (err) {
  //       res.sendStatus(403);
  //     } else {
  //       res.json({});
  //     }
  //   }
  // );
};

const getToken = async (req: Request, res: Response) => {
  const { token } = req.body;
  // new Date().getTime();
  const tokens = req.header("auth-token");
  const str = jwt.verify(
    token,
    process.env.JWT_ACCESS_SECRET,
    (err: any, authdata: any) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({ tokens });
      }
    }
  );
};

module.exports = { loginEmployee, postEmployee, postTimeLog, getToken };

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

// res.status(200).json({
//   status: 200,
//   data: user[0],
//   success: true,
//   message: "success",
//   generateToken,
// });

// if (
//   emp_id === "" &&
//   emp_email === "" &&
//   emp_name === "" &&
//   emp_phone === "" &&
//   emp_address === "" &&
//   emp_password === ""
// ) {
//   res.json({ message: "all field are required" });
// }
// if (emp_id === "") {
//   res.json({ emp_id: "emp_id is empty" });
// }
// if (emp_name === "") {
//   res.json({ emp_name: "emp_name is empty" });
// }
// if (emp_email === "") {
//   res.json({ emp_email: "emp_name is empty" });
// }
// if (emp_phone === "") {
//   res.json({ emp_phone: "emp_phone is empty" });
// }
// if (emp_address === "") {
//   res.json({ emp_address: "emp_address is empty" });
// }
// if (emp_password === "") {
//   res.json({ emp_password: "emp_password is empty" });
// }
