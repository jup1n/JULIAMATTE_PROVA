import { FastifyInstance, RouteShorthandOptions } from "fastify";
import { produtoControllers } from "../controllers/produtoControllers";


export const produtosRoutes = (fastify: FastifyInstance,
    options: RouteShorthandOptions, done: () => void
) => {
    fastify.register(produtoControllers)
    done();
}
