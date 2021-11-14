/*
  Warnings:

  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[photo]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_image_fkey";

-- DropIndex
DROP INDEX "Product_image_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image",
ADD COLUMN     "photo" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_photo_key" ON "Product"("photo");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_photo_fkey" FOREIGN KEY ("photo") REFERENCES "ProductImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
