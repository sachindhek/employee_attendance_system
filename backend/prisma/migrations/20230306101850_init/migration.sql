-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "emp_id" TEXT NOT NULL,
    "emp_name" TEXT NOT NULL,
    "emp_email" TEXT NOT NULL,
    "emp_phone" TEXT NOT NULL,
    "emp_address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_emp_id_key" ON "Employee"("emp_id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_emp_name_key" ON "Employee"("emp_name");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_emp_email_key" ON "Employee"("emp_email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_emp_phone_key" ON "Employee"("emp_phone");
