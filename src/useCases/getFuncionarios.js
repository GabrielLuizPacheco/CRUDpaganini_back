import {sql} from "../libs/postgres.js"

export const getFuncionarios = async(req, res) => {
    try{
        const dbFuncionarios = await sql`select * from funcionarios`

        console.log('dbFuncionarios',dbFuncionarios);
        res.send('Recuperado todos os funcionários');
    }
    catch (err) {
        res.send('Não foi possível recuperar os funcionários');
    }
};
