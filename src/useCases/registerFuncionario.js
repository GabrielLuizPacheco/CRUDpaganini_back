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
                ${idFuncao},
                ${status},
                ${dtRegistro},
                ${telefonePrincipal},
                ${telefoneSecundario},
                ${rua},
                ${idBairro},
                ${idCidade},
                ${numero},
                ${dtNascimento},
                ${CNHnumero},
                ${dtVencCNH},
                ${dtVencCredencial},
                ${dtInativacao},
                ${idGaragem},
                ${obs}
            )
         `;


        res.json({
            memsangem: "Funcionário criado com sucessso;",
            dados: dbFuncionario
        });
    } catch (err) {
        console.log(err)
        res.json({memsangem :"Não foi possível criar o Funcionário"});
    }

}
