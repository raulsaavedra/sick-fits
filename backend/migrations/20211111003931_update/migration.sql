/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Post_tags_Tag_posts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_author_fkey";

-- DropForeignKey
ALTER TABLE "_Post_tags_Tag_posts" DROP CONSTRAINT "_Post_tags_Tag_posts_A_fkey";

-- DropForeignKey
ALTER TABLE "_Post_tags_Tag_posts" DROP CONSTRAINT "_Post_tags_Tag_posts_B_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "_Post_tags_Tag_posts";
