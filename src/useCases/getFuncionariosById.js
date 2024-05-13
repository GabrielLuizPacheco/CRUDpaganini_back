import {sql} from "../libs/postgres.js"

export const getFuncionariosById = async (req, res) => {
    const request = req.params;

    try {
        const dbFuncionario = await sql`SELECT *
                                        FROM funcionarios
                                        WHERE id = ${request.id}`

        const {
            id,
            chapa,
            cnhnumero,
            dtinativacao,
            dtnascimento,
            dtregistro,
            dtvenccnh,
            dtvenccredencial,
            idbairro,
            idcidade,
            idempresa,
            idfuncao,
            idgaragem,
            nome,
            numero,
            obs,
            rua,
            status,
            telefoneprincipal,
            telefonesecundario} = dbFuncionario[0]


        const newObj = {
            id: id,
            nome: nome,
            idEmpresa: Number(idempresa),
            idFuncao: Number(idfuncao),
            dtRegistro: new Date(dtregistro),
            chapa: chapa,
            status: status,
            telefonePrincipal: telefoneprincipal,
            telefoneSecundario: telefonesecundario,
            idBairro: Number(idbairro),
            rua: rua,
            idCidade: Number(idcidade),
            numero: numero,
            dtNascimento: dtnascimento,
            CNHNumero: cnhnumero,
            dtVenCNH: dtvenccnh,
            dtVenCredencial: dtvenccredencial,
            dtInativacao: dtinativacao,
            idGaragem: Number(idgaragem),
            obs: obs
           
        }

        res.json({dados:newObj});
    } catch (err) {
        res.send('Não foi possível resgatar o funcionário');
    }
}



