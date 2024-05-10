import {sql} from "../libs/postgres.js"

export const updateFuncionario = async (req, res) => {
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
    } = req.body;
    const {id} = req.params;

    try {
        const dbFuncionario = await sql`UPDATE funcionarios
                                        SET nome = ${nome},
                                            idEmpresa = ${idEmpresa},
                                            chapa = ${chapa},
                                            idFuncao = ${idFuncao},
                                            status = ${status},
                                            dtRegistro = ${dtRegistro},
                                            telefonePrincipal = ${telefonePrincipal},
                                            telefoneSecundario = ${telefoneSecundario},
                                            rua = ${rua},
                                            idBairro = ${idBairro},
                                            idCidade = ${idCidade},
                                            numero = ${numero},
                                            dtNascimento = ${dtNascimento},
                                            CNHnumero = ${CNHnumero},
                                            dtVencCNH = ${dtVencCNH},
                                            dtVencCredencial = ${dtVencCredencial},
                                            dtInativacao = ${dtInativacao},
                                            idGaragem = ${idGaragem},
                                            obs = ${obs}
                                        WHERE id = ${id} returning *`
        console.log('dbFuncionario', dbFuncionario);
        res.send('Funcionário atualizado com sucesso');
    } catch (err) {
        console.log(idEmpresa)
        res.send('Não foi possível atualizar o Funcionário');
    }
}
