import {sql} from "../libs/postgres.js"

export const getFuncionarios = async(req, res) => {
    try{
        const dbFuncionarios = await sql`select * from funcionarios`


        res.json({dados:dbFuncionarios});
    }
    catch (err) {
        res.send('Não foi possível recuperar os funcionários');
    }
};
