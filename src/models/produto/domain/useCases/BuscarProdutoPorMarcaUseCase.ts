

import { ProdutoRepository } from "../../data/repository/ProdutoRepository";
import { ProdutoUpdateDto } from "../../data/entity/Produto";
import { Produto } from "@prisma/client";

export class BuscarProdutoPorMarcaUseCase {

    constructor(private produtoRepository: ProdutoRepository) { }

    execute(marca: string): Promise<Produto | null> {
        try {

            return await this.produtoRepository.buscarProdutoPorMarca(marca)

        } catch (error) {
            throw new Error("Problema ao deletar produto")
        }
    }

}