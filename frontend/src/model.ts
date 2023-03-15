export interface EmployeeType {
  emp_id: string;
  emp_name: string;
  emp_email: string;
  emp_phone: string;
  emp_address: string;
  emp_password: string;
}

export const defaultEmployee: EmployeeType = {
  emp_id: "",
  emp_name: "",
  emp_email: "",
  emp_phone: "",
  emp_address: "",
  emp_password: "",
};

export interface LoginType {
  emp_email: string;
  emp_password: string;
}

export const defaultLoginType: LoginType = {
  emp_email: "",
  emp_password: "",
};
