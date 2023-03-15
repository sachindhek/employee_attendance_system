import { Request, Response } from "express";
const employeeValidation = (req: Request, res: Response) => {
  const { emp_id, emp_name, emp_email, emp_phone, emp_address } = req.body;
  if (
    emp_id === "" &&
    emp_email === "" &&
    emp_name === "" &&
    emp_phone === "" &&
    emp_address === ""
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
};
module.exports = { employeeValidation };
