#region usings

using System;
using Flunt.Notifications;

#endregion

namespace Shift.Domain.Cadastro.NucleoModel.Commands.Inputs
{
    public class BaseNucleoCommand : Notifiable
    {

        public Guid     Id            { get; protected set; }


        public string   CodEmpresa    { get; protected set; }


        public string   NomeNucleo    { get; protected set; }


        public string   CodGrupo      { get; protected set; }


        public bool     Excluido      { get; protected set; }

    }
}
