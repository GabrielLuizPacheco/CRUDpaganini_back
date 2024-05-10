import {sql} from "../libs/postgres.js"

export const updateFuncionario = async(req, res) => {
    const {email, nome} = req.body;
    const {id} = req.params;

    try {
        const dbFuncionario = await sql`UPDATE funcionarios SET nome=${nome}, email=${email} WHERE id=${id} returning *`
        console.log('dbFuncionario', dbFuncionario);

        res.send('Funcionário atualizado com sucesso');
    } catch (err) {
        res.send('Não foi possível atualizar o Funcionário');
    }
}
