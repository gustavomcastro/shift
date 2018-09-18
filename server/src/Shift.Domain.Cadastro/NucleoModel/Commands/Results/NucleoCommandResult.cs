#region usings

using System;
using Shift.Domain.Core.Interfaces;

#endregion

namespace Shift.Domain.Cadastro.NucleoModel.Commands.Results
{
    public class NucleoCommandResult : ICommandResult
    {

        public Guid     Id              { get; set; }

        public string   CodEmpresa      { get; set; }

        public string   NomeEmpresa     { get; set; }

        public string   CodGrupo        { get; set; }

        public string   NomeNucleo      { get; set; }
    }
}
