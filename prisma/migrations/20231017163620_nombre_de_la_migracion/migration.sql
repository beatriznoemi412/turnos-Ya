-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rememberMe" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "LoginInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rememberPassword" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "MerchantInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "logoText" TEXT NOT NULL,
    "photos" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LoginInfo_email_key" ON "LoginInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MerchantInfo_email_key" ON "MerchantInfo"("email");
