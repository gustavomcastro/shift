#region usings 

using System.Collections.Generic;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Commands.Results;
using Shift.Domain.Core.Interfaces;

#endregion

namespace Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Repository
{
    public interface ICentroCustoRepository : IRepository<CentroCusto>
    {

        #region Leitura

        CentroCustoCommandResult ObterPorCodigo(string codEmpresa, long codCentroCusto);

        IEnumerable<CentroCustoCommandResult> Listar(string codEmpresa);

        IEnumerable<CentroCustoCommandResult> ListarPaginado(int pagina, int qtdeItensPorPagina, string filtro);

        #endregion

        void Excluir(string codEmpresa, long codCentroCusto);
    }
}
