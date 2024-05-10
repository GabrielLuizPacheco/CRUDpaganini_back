import {sql} from "../libs/postgres.js"

export const getFuncionariosById = async (req, res) => {
    const {id} = req.params;

    try {
        const dbFuncionario = await sql`SELECT *
                                        FROM funcionarios
                                        WHERE id = ${id}`

        console.log('dbFuncionario', dbFuncionario);

        res.send('Funcionário recuperado com sucesso');
    } catch (err) {
        res.send('Não foi possível resgatar o funcionário');
    }
}


