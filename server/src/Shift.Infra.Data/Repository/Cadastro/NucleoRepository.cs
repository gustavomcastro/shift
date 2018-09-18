#region usings

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Microsoft.EntityFrameworkCore;
using Shift.Domain.Cadastro.NucleoModel;
using Shift.Domain.Cadastro.NucleoModel.Commands.Results;
using Shift.Domain.Cadastro.NucleoModel.Repository;
using Shift.Infra.Data.Context;

#endregion

namespace Shift.Infra.Data.Repository.Cadastro
{
    public class NucleoRepository : Repository<Nucleo>, INucleoRepository
    {

        public NucleoRepository(ShiftContext context) : base(context)
        {

        }


        #region Escrita


        public override void RemoverGuid(Guid id)
        {
            var nucleo = Buscar(e => e.Id == id && e.Excluido == false).FirstOrDefault();


            nucleo.Excluir();


            Atualizar(nucleo);
        }


        #endregion


        #region Leitura


        public NucleoCommandResult ObterPorCodigo(Guid id)
        {
            return Db.Database.GetDbConnection().Query<NucleoCommandResult>("[Cadastro].[SP_NucleoListarPorId]",
               new { CodEmpresa = id },
               commandType: CommandType.StoredProcedure).FirstOrDefault();
        }


        public IEnumerable<NucleoCommandResult> Listar(string codEmpresa)
        {
            return Db.Database.GetDbConnection().Query<NucleoCommandResult>("[Cadastro].[SP_NucleoListar]",
              new
              {
                  Filtro = codEmpresa,
              },
              commandType: CommandType.StoredProcedure).ToList();
        }



        public IEnumerable<NucleoCommandResult> ListarPaginado(int pagina, int qtdeItensPorPagina, string filtro)
        {

            return Db.Database.GetDbConnection().Query<NucleoCommandResult>("[Cadastro].[SP_NucleoListar]",
                   new
                     {
                         Filtro = filtro
                     },
                     commandType: CommandType.StoredProcedure).ToList().Skip(qtdeItensPorPagina * (pagina - 1)).Take(qtdeItensPorPagina);
        }


        #endregion

    }
}
