
import express, { NextFunction, Request, Response } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executado na porta 3000!');
})