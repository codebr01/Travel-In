-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT NOT NULL DEFAULT 'Anônimo',
    "user_email" TEXT NOT NULL DEFAULT 'Anônimo',
    "message" TEXT NOT NULL DEFAULT 'Sem mensagem'
);
