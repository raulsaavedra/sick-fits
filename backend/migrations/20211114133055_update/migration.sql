-- CreateTable
CREATE TABLE "ProductImage" (
    "id" TEXT NOT NULL,
    "image" JSONB,
    "altText" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);
