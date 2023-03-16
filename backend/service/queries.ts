import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const employeeLogin = async (
  id: number,
  emp_email: string,
  emp_password: string
) => {
  return db.employee.findMany({
    where: {
      AND: {
        emp_email,
        emp_password,
      },
    },
    select: {
      emp_email: true,
      id: true,
    },
  });
};

const insertEmployee = async (
  emp_id: string,
  emp_name: string,
  emp_email: string,
  emp_phone: string,
  emp_address: string,
  emp_password: string
) => {
  return db.employee.create({
    data: { emp_id, emp_name, emp_email, emp_phone, emp_address, emp_password },
  });
};

const addtimelog = async (emp_id: number, inTime: any, outTime: any) => {
  return db.timeLog.create({
    data: { emp_id, inTime, outTime },
  });
};

module.exports = { employeeLogin, insertEmployee, addtimelog };
