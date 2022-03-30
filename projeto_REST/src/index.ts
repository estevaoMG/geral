
import express, { NextFunction, Request, Response } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error-handler.middleware';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

// Configuração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executado na porta 3000!');
})