/*
  Warnings:

  - A unique constraint covering the columns `[emp_password]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emp_password` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Employee_emp_name_key";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "emp_password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_emp_password_key" ON "Employee"("emp_password");
