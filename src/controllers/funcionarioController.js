import express from "express"
import {registerFuncionario} from "../useCases/registerFuncionario.js"
import {getFuncionarios} from "../useCases/getFuncionarios.js";
import {updateFuncionario} from "../useCases/updateFuncionarios.js";
import {deleteFuncionario} from "../useCases/deleteFuncionario.js";
import {getFuncionariosById} from "../useCases/getFuncionariosById.js";

const funcionarioController = express.Router();


funcionarioController.get('/funcionarios', getFuncionarios);
funcionarioController.get('/funcionarios/:id',getFuncionariosById)

funcionarioController.post('/funcionarios',registerFuncionario);

funcionarioController.put('/funcionarios/:id', updateFuncionario);

funcionarioController.delete('/funcionarios/:id', deleteFuncionario);

export {funcionarioController};
