import fastify from "fastify";
import { produtosRoutes } from "../models/produto/routes/produtoRoutes";

const server = fastify()
const PORT = 3333;

server.register(produtosRoutes)

server.get('/', (request, reply) => {
    return { message: 'Você está na API da CESUL' }
})

server.listen({ port: PORT }).then(() => {
    console.log("Servidor está rodando na porta " + PORT)
})



