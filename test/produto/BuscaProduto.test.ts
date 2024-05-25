import { ProdutoCriacaoDto } from "../../src/models/produto/data/entity/Produto";
import { ProdutoRepository } from "../../src/models/produto/data/repository/ProdutoRepository";
import { BuscarProdutoPorCodigoUseCase } from "../../src/models/produto/domain/useCases/BuscarProdutoPorCodigoUseCase";
import { SalvarProdutoUseCase } from "../../src/models/produto/domain/useCases/SalvarProdutoUseCase";

describe("Busca de Produto", () => {

    let buscarProdutoPorCodigoUseCase: BuscarProdutoPorCodigoUseCase;
    let salvarProdutoUseCase: SalvarProdutoUseCase;
    let fakeService: any;

    beforeEach(() => {
        const produtoRepository = new ProdutoRepository();
        buscarProdutoPorCodigoUseCase = new BuscarProdutoPorCodigoUseCase(produtoRepository)
        salvarProdutoUseCase = new SalvarProdutoUseCase(produtoRepository)
    })

    it('Buscar produto por codigo', async () => {

        const produtoCriacaoDto: ProdutoCriacaoDto = {
            descricao: "Coca-Cola",
            marca: "Coca",
            preco: 42.5
        }
        const produto = await salvarProdutoUseCase.execute(produtoCriacaoDto);

        const produtoBusca = await buscarProdutoPorCodigoUseCase.execute(produto.codigo);

        expect(produtoBusca).toBeDefined();
        expect(produto.codigo).toBe(produtoBusca!.codigo)
        expect(produto.descricao).toBe(produtoBusca!.descricao)
        expect(produto.marca).toBe(produtoBusca!.marca)
    })

    it('verificar Produto não encontrada', async () => {

        const codigo = 99999
        const produtoBusca = await buscarProdutoPorCodigoUseCase.execute(codigo);

        expect(produtoBusca).toBeNull();

    })


})