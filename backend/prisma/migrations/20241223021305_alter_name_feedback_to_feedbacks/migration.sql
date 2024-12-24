/*
  Warnings:

  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Feedback";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT NOT NULL DEFAULT 'Anônimo',
    "user_email" TEXT NOT NULL DEFAULT 'Anônimo',
    "message" TEXT NOT NULL DEFAULT 'Sem mensagem'
);
