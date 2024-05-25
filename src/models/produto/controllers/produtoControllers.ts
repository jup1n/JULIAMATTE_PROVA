import { FastifyInstance, RouteShorthandOptions } from "fastify";
import { SalvarProdutoUseCase } from "../domain/useCases/SalvarProdutoUseCase";
import { ProdutoRepository } from "../data/repository/ProdutoRepository";
import { ProdutoCriacaoDto, ProdutoUpdateDto } from "../data/entity/Produto";

import { AlterarProdutoUseCase } from "../domain/useCases/AlterarProdutoUseCase";
import { DeletarProdutoUseCase } from "../domain/useCases/DeletarProdutoUseCase";
import { BuscarProdutoPorCodigoUseCase } from "../domain/useCases/BuscarProdutoPorCodigoUseCase";
import { BuscarProdutoPorMarcaUseCase } from "../domain/useCases/BuscarProdutoPorMarcaUseCase";


export const produtoControllers = (fastify: FastifyInstance,
    options: RouteShorthandOptions, done: () => void
) => {

    const produtoRepository = new ProdutoRepository();
    const salvarProdutoUseCase = new SalvarProdutoUseCase(produtoRepository);
    const buscarProdutoPorMarcaUseCase = new BuscarProdutoPorMarcaUseCase(produtoRepository)
    const alterarProdutoUseCase = new AlterarProdutoUseCase(produtoRepository);
    const deletarProdutoUseCase = new DeletarProdutoUseCase(produtoRepository)

    fastify.post('/salvarProduto', async (request, reply) => {
        try {

            const produto = await salvarProdutoUseCase.execute(request.body as ProdutoCriacaoDto);
            reply.code(201).send(produto);

        } catch (error) {
            reply.code(500).send({ error: 'Houve algum problema ao salvar' })
        }

    })

    fastify.get('/buscarProduto/:marca', async (request: any, reply) => {

        try {

            const marca = request.params.marca;
            const produto = buscarProdutoPorMarcaUseCase.execute(marca);

            if (produto) {
                reply.code(200).send(produto)
            } else {
                reply.code(404).send({ erro: 'Produto não encontrada' })
            }
        } catch (error) {
            reply.code(500).send({ erro: 'Erro de servidor' })
        }


    })

    fastify.put('/alterarProduto/:codigo', async (request, reply) => {

        try {
            const codigo = request.params.codigo;
            const produtoAlterar = request.body as ProdutoUpdateDto;

            const produtoAlterada =
                await alterarProdutoUseCase.execute(codigo, produtoAlterar)

            reply.code(200).send(produtoAlterada)

        } catch (error) {
            reply.code(500).send({ erro: 'Problema ao alterar' })
        }


    })

    fastify.delete('/deletarProduto/:codigo', async (request, reply) => {

        try {
            const codigo = request.params.codigo;
            await deletarProdutoUseCase.execute(codigo)

            reply.code(204).send("Deletado com sucesso ")

        } catch (error) {
            reply.code(500).send({ erro: 'Problema ao deletar' })
        }

    })


    done();


}