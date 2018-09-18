#region usings

using System;
using System.Collections.Generic;
using Shift.Domain.Cadastro.NucleoModel.Commands.Results;
using Shift.Domain.Core.Interfaces;

#endregion

namespace Shift.Domain.Cadastro.NucleoModel.Repository
{
    public interface INucleoRepository : IRepository<Nucleo>
    {

        #region Leitura

        NucleoCommandResult ObterPorCodigo(Guid id);

        IEnumerable<NucleoCommandResult> Listar(string codEmpresa);

        IEnumerable<NucleoCommandResult> ListarPaginado(int pagina, int qtdeItensPorPagina, string filtro);

        #endregion

    }
}
