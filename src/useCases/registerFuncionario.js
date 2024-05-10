import {sql} from "../libs/postgres.js"

export const registerFuncionario = async(req, res) => {
    const {
        nome,
        idEmpresa,
        chapa,
        idFuncao,
        status,
        dtRegistro,
        telefonePrincipal,
        telefoneSecundario,
        rua,
        idBairro,
        idCidade,
        numero,
        dtNascimento,
        CNHnumero,
        dtVencCNH,
        dtVencCredencial,
        dtInativacao,
        idGaragem,
        obs,
    } = req.body

    try {
        const dbFuncionario = await sql`
            insert into funcionarios (nome,
                                      idEmpresa,
                                      chapa,
                                      idFuncao,
                                      status,
                                      dtRegistro,
                                      telefonePrincipal,
                                      telefoneSecundario,
                                      rua,
                                      idBairro,
                                      idCidade,
                                      numero,
                                      dtNascimento,
                                      CNHnumero,
                                      dtVencCNH,
                                      dtVencCredencial,
                                      dtInativacao,
                                      idGaragem,
                                      obs)
            values ('James create now',
                    ${idEmpresa},
                    '2055',
                    1,
                    true,
                    '03/13/2024',
                    '8536938342',
                    '85986690178',
                    'Vila Pires',
                    1,
                    1,
                    381,
                    '04/05/1981',
                    '80968121825',
                    '09/25/2025',
                    null,
                    null,
                    1,
                    null
                   ) returning *`

        console.log('dbFuncionario', dbFuncionario)

        res.send('Funcionário criado com sucesso');
    } catch (err) {
        console.log(err)
        res.send('Não foi possível criar o Funcionário')
    }

}
