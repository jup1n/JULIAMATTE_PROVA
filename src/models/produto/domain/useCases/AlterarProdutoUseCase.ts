import { ProdutoRepository } from "../../data/repository/ProdutoRepository";
import { ProdutoUpdateDto } from "../../data/entity/Produto";
import { Produto } from "@prisma/client";

export class AlterarProdutoUseCase {

    constructor(private produtoRepository: ProdutoRepository) { }

    async execute(codigo: number, produtoUpdate: ProdutoUpdateDto): Promise<Produto> {
        try {

            return await this.produtoRepository.alterarProduto(codigo,produtoUpdate)

        } catch (error) {
            throw new Error("Problema ao deletar Produto")
        }
    }

}