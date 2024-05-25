/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Produto_cnpj_key" ON "Produto"("cnpj");
