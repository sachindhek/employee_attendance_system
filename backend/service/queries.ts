import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const employeeLogin = async (emp_email: string, emp_password: string) => {
  return prisma.employee.findMany({
    where: {
      AND: {
        emp_email,
        emp_password,
      },
    },
    select: {
      emp_email: true,
      emp_password: true,
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
  return prisma.employee.create({
    data: { emp_id, emp_name, emp_email, emp_phone, emp_address, emp_password },
  });
};

module.exports = { employeeLogin, insertEmployee };
