#region usings

using System;
using Shift.Domain.Core.Interfaces;

#endregion

namespace Shift.Domain.Cadastro.NucleoModel.Commands.Inputs
{
    public class ExcluirNucleoCommand : BaseNucleoCommand, ICommandResult
    {

        public ExcluirNucleoCommand(Guid id)
        {
            Id          = id;

            Excluido    = false;
        }
    }
}
