import {sql} from "../libs/postgres.js"

export const registerFuncionario = async(req, res) => {
    const {nome, email} = req.body

    try {
        const dbFuncionario = await sql`insert into "funcionarios" (nome, email) values (${nome}, ${email}) returning *`

        console.log('dbFuncionario', dbFuncionario)

        res.send('Funcionário criado com sucesso');
    } catch (err) {
        res.send('Não foi possível criar o usuário')
    }

}
