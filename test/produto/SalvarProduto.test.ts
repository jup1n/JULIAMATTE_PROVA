import { ProdutoCriacaoDto } from "../../src/models/produto/data/entity/Produto";
import { ProdutoRepository } from "../../src/models/produto/data/repository/ProdutoRepository"
import { SalvarProdutoUseCase } from "../../src/models/produto/domain/useCases/SalvarProdutoUseCase";

describe('SalvarProduto', () => {

    let salvarProdutoUseCase: SalvarProdutoUseCase;

    beforeEach(() => {
        const produtoRepository = new ProdutoRepository();
        salvarProdutoUseCase = new SalvarProdutoUseCase(produtoRepository);
    })

    it('teste de criação de novo Produto', async () => {

        const addPreco = 5
        
        const produtoCriacaoDto: ProdutoCriacaoDto = {
            descricao: "Coca-Cola",
            marca: "Coca",
            preco: 42.5 + addPreco
        }

        const produto = await salvarProdutoUseCase.execute(produtoCriacaoDto);

        expect(produto).toBeDefined();
        expect(produto.codigo).toBeDefined();
        expect(produtoCriacaoDto.descricao).toBe(produto.descricao);
        expect(produtoCriacaoDto.preco).toBe(produto.preco);

    })

})