/*
  Warnings:

  - You are about to drop the column `firstName` on the `Barber` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Barber` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Client` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `Barber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Barber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barber" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL;
