/*
  Warnings:

  - The primary key for the `Barber` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[barberId]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_barberId_fkey";

-- AlterTable
ALTER TABLE "Barber" DROP CONSTRAINT "Barber_pkey",
ADD COLUMN     "clientId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Barber_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Barber_id_seq";

-- AlterTable
ALTER TABLE "Client" DROP CONSTRAINT "Client_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "barberId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Client_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Client_barberId_key" ON "Client"("barberId");
