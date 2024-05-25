import { ProdutoCriacaoDto, ProdutoUpdateDto } from "../../src/models/produto/data/entity/Produto";
import { ProdutoRepository } from "../../src/models/produto/data/repository/ProdutoRepository"
import { AlterarProdutoUseCase } from "../../src/models/produto/domain/useCases/AlterarProdutoUseCase";
import { BuscarProdutoPorCodigoUseCase } from "../../src/models/produto/domain/useCases/BuscarProdutoPorCodigoUseCase";
import { DeletarProdutoUseCase } from "../../src/models/produto/domain/useCases/DeletarProdutoUseCase";
import { SalvarProdutoUseCase } from "../../src/models/produto/domain/useCases/SalvarProdutoUseCase";


describe("DeletarProdutoTest", () => {

    let deletarProdutoUseCase: DeletarProdutoUseCase;
    let buscarProdutoPorCodigoUseCase: BuscarProdutoPorCodigoUseCase;
    let salvarProdutoUseCase: SalvarProdutoUseCase;

    beforeEach(() => {
        const produtoRepository = new ProdutoRepository();
        deletarProdutoUseCase = new DeletarProdutoUseCase(produtoRepository)
        buscarProdutoPorCodigoUseCase = new BuscarProdutoPorCodigoUseCase(produtoRepository)
        salvarProdutoUseCase = new SalvarProdutoUseCase(produtoRepository)
    })

    it('deletar produto cadastrada', async () => {

        const produtoCriacaoDto: ProdutoCriacaoDto = {
            descricao: "Coca-Cola",
            marca: "Coca",
            preco: 42.5
        }

        const produto = await salvarProdutoUseCase.execute(produtoCriacaoDto);

        expect(produto).toBeDefined()

        await deletarProdutoUseCase.execute(produto.codigo);

        const produtoRetorno = await buscarProdutoPorCodigoUseCase.execute(produto.codigo);
        expect(produtoRetorno).toBeNull();
    })





})