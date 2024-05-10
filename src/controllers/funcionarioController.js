import express from "express"
import {registerFuncionario} from "../useCases/registerFuncionario.js"

const funcionarioController = express.Router();


funcionarioController.get('/funcionarios', (req, res) => {
    res.send('Chegou aqui, estamos listando todos os funcionarios');
});

funcionarioController.post('/funcionarios',registerFuncionario);

funcionarioController.put('/funcionarios/:id', (req, res) => {
    const {id} = req.params
    res.send(`Chegou aqui, estamos atualizando um funcionarios ${id}`);
});

funcionarioController.delete('/funcionarios/:id', (req, res) => {
    const {id} = req.params

    res.send(`Chegou aqui, estamos deletando um funcionarios ${id}`);
});

export {funcionarioController};
