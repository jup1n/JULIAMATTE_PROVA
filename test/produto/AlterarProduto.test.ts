import { ProdutoCriacaoDto, ProdutoUpdateDto } from "../../src/models/produto/data/entity/Produto";
import { ProdutoRepository } from "../../src/models/produto/data/repository/ProdutoRepository"
import { AlterarProdutoUseCase } from "../../src/models/produto/domain/useCases/AlterarProdutoUseCase";
import { SalvarProdutoUseCase } from "../../src/models/produto/domain/useCases/SalvarProdutoUseCase";

describe("AlteracaoProdutoTest", () => {

    let alterarProdutoUseCase: AlterarProdutoUseCase;
    let salvarProdutoUseCase: SalvarProdutoUseCase;

    beforeEach(() => {
        const produtoRepository = new ProdutoRepository();
        alterarProdutoUseCase = new AlterarProdutoUseCase(produtoRepository)
        salvarProdutoUseCase = new SalvarProdutoUseCase(produtoRepository)
    })

    it('Alterar produto cadastrado', async () => {

        const produtoCriacaoDto: ProdutoCriacaoDto = {
            descricao: "Coca-Cola",
            marca: "Coca",
            preco: 42.5
        }
        const produto = await salvarProdutoUseCase.execute(produtoCriacaoDto);

        const produtoAlterarDto: ProdutoUpdateDto = {
            descricao: "UPDATE Produto"
        }

        const produtoUpdate =
            await alterarProdutoUseCase.execute(produto.codigo, produtoAlterarDto);

        expect(produtoUpdate).toBeDefined()
        expect(produtoUpdate.codigo).toBe(produto.codigo)
        expect(produtoUpdate.marca).toBe(produto.marca)
        expect(produtoUpdate.descricao).toBe(produtoAlterarDto.descricao);

    })





})