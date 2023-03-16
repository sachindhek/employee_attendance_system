/*
  Warnings:

  - Changed the type of `emp_id` on the `TimeLog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "TimeLog" DROP CONSTRAINT "TimeLog_emp_id_fkey";

-- AlterTable
ALTER TABLE "TimeLog" DROP COLUMN "emp_id",
ADD COLUMN     "emp_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TimeLog" ADD CONSTRAINT "TimeLog_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
