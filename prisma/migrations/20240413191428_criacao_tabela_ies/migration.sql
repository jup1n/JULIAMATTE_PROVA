-- CreateTable
CREATE TABLE "Produto" (
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("codigo")
);
