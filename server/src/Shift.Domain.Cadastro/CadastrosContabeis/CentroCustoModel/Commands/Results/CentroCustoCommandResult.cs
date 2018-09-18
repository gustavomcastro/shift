#region usings

using Shift.Domain.Core.Interfaces;

#endregion

namespace Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Commands.Results
{
    public class CentroCustoCommandResult : ICommandResult
    {

        public string   CodEmpresa          { get; set; }

        public string   NomeEmpresa         { get; set; }

        public long     CodCentroCusto      { get; set; }

        public string   NomeCentroCusto     { get; set; }

        public string   CodGrupo            { get; set; }

        public string   Legado              { get; set; }

        public int      CodClasse           { get; set; }

        public string   ClasseContabil      { get; set; }

        public int      CodTipoBloqueio     { get; set; }

        public string   TipoBloqueio        { get; set; }
    }
}
