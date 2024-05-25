/*
  Warnings:

  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cnpj` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `dataCriacao` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Produto` table. All the data in the column will be lost.
  - The `codigo` column on the `Produto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `descricao` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Produto_cnpj_key";

-- AlterTable
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_pkey",
DROP COLUMN "cnpj",
DROP COLUMN "dataCriacao",
DROP COLUMN "nome",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "marca" TEXT NOT NULL,
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
DROP COLUMN "codigo",
ADD COLUMN     "codigo" SERIAL NOT NULL,
ADD CONSTRAINT "Produto_pkey" PRIMARY KEY ("codigo");
