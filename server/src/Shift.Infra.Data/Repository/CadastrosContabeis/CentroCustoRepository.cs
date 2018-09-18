#region usings

using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Microsoft.EntityFrameworkCore;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Commands.Results;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Repository;
using Shift.Infra.Data.Context;

#endregion

namespace Shift.Infra.Data.Repository.CadastrosContabeis
{
    public class CentroCustoRepository : Repository<CentroCusto>, ICentroCustoRepository
    {

        public CentroCustoRepository(ShiftContext context) : base(context)
        {

        }


        #region Leitura

        public CentroCustoCommandResult ObterPorCodigo(string codEmpresa, long codCentroCusto)
        {
            return Db.Database.GetDbConnection().Query<CentroCustoCommandResult>("[Cadastro].[SP_CentroCustoListarPorId]",
                new
                {
                    CodEmpresa      = codEmpresa,

                    CodCentroCusto  = codCentroCusto

                },
                commandType: CommandType.StoredProcedure).FirstOrDefault();
        }



        public IEnumerable<CentroCustoCommandResult> Listar(string codEmpresa)
        {
            return Db.Database.GetDbConnection().Query<CentroCustoCommandResult>("[Cadastro].[SP_CentroCustoListar]",
                 new
                 {
                     Filtro = codEmpresa,
                 },
                 commandType: CommandType.StoredProcedure).ToList();
        }



        public IEnumerable<CentroCustoCommandResult> ListarPaginado(int pagina, int qtdeItensPorPagina, string filtro)
        {
            return Db.Database.GetDbConnection().Query<CentroCustoCommandResult>("[Cadastro].[SP_CentroCustoListar]",
                new
                {
                    Filtro = filtro
                },
                commandType: CommandType.StoredProcedure).ToList().Skip(qtdeItensPorPagina * (pagina - 1)).Take(qtdeItensPorPagina);

        }


        #endregion


        
        #region Escrita

        public void Excluir(string codEmpresa, long codCentroCusto)
        {
            DbSet.Remove(DbSet.Find(codEmpresa, codCentroCusto));
        }

        #endregion


    }
}
