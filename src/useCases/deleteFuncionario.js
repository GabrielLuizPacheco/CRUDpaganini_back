import {sql} from "../libs/postgres.js"

export const deleteFuncionario = async (req, res) => {
    const {id} = req.params;

    try {
        const dbFuncionario = await sql`delete from funcionarios where id=${id}`;

        res.send('Funcionario deletado com êxito');
    }catch (err){
        res.send('Não foi possível excluir o Funcionário');
    }
}
