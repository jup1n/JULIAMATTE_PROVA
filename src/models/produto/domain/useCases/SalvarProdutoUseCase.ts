import { ProdutoCriacaoDto } from "../../data/entity/Produto";
import { ProdutoRepository } from "../../data/repository/ProdutoRepository";

export class SalvarProdutoUseCase {

    constructor(private produtoRepository: ProdutoRepository) { }

    async execute(produto: ProdutoCriacaoDto) {
        try{
            const ProdutoCriado = await this.produtoRepository.salvarProduto(produto);
            return ProdutoCriado;
        }catch (error){
            console.log(error)
            throw new Error('Problema ao criar produto')
        }
    }

}