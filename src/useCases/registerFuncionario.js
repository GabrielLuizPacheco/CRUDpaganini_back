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
        obs
    } = req.body
    console.log(nome,idEmpresa)

    try {
        const dbFuncionario = await sql`
            insert into funcionarios (
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
              obs
            ) values (
            ${nome},
            ${idEmpresa},
            ${chapa},
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
            ${CNHnumero},
                 '09/25/2025',
                 null,
                 null,
                 1,
                 null
             ) returning *
         `;


        res.json({memsangem :"Funcionário criado com sucessso;" ,dados :dbFuncionario});
    } catch (err) {
        console.log(err)
        res.send('Não foi possível criar o Funcionário')
    }

}
