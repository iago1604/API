import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify();

server.register(cors, {
    origin: '*',
    methods: ['GET','POST']
})

const banco = [
    {
        email: 'iagodemoraes07@gmail.com',
        senha: '1234'
    }
]

server.post('/login', (request) => {
    const usuario = request.body;

    for (const userBanco of banco) {
        if(userBanco.email === usuario.email 
            && userBanco.senha === usuario.senha) {
                return {mensagem: 'pode entrae'}
            } else{
                return {mensagem: 'n pode entrar'}
            }
    }

    return 'emanuel todo gay';
});

server.get('/login', () => {
    return 'emanuel todo gay';
});

server.listen({
    port: 3333
});