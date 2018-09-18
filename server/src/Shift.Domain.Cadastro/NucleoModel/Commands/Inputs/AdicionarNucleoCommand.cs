#region usings

using System;
using Flunt.Validations;
using Shift.Domain.Core.Interfaces;
using Shift.Domain.Core.Utils;

#endregion

namespace Shift.Domain.Cadastro.NucleoModel.Commands.Inputs
{
    public class AdicionarNucleoCommand : BaseNucleoCommand, ICommandResult
    {

        public AdicionarNucleoCommand(string codEmpresa, string nomeNucleo, string codGrupo)
        {

            Id          = Guid.NewGuid();


            CodEmpresa  = TratandoStrings.RemoverAcentuacao(TratandoStrings.RemoverEspacosEntrePalavras(codEmpresa.ToUpper()));


            NomeNucleo  = TratandoStrings.RemoverAcentuacao(TratandoStrings.RemoverEspacosEntrePalavras(nomeNucleo.ToUpper()));


            CodGrupo    = TratandoStrings.RemoverAcentuacao(TratandoStrings.RemoverEspacosEntrePalavras(codGrupo.ToUpper()));


            Excluido = false;
        }



        //Fail Fast Validations
        public void Validar()
        {

            AddNotifications(new Contract()

            
            .Requires()


            //CodEmpresa
            .IsNotNullOrEmpty(CodEmpresa, "Cod. Empresa", "O código deve ser informado")
            .HasLen(CodEmpresa, 4, "Cod. Empresa", "O código deve possuir 04 caracteres")


            
            //Nome Nucleo
            .IsNotNullOrEmpty(NomeNucleo, "Nome Núcleo", "O nome do Centro de Custo deve ser informado")
            .HasMinLen(NomeNucleo, 3, "Nome Núcleo", "O nome do Centro de Custo deve possuir no mínimo 3 caracteres")
            .HasMaxLen(NomeNucleo, 200, "Nome Núcleo", "O nome do Centro de Custo deve possuir no máximo 200 caracteres")


            //CodGrupo
            .IsNotNullOrEmpty(CodGrupo, "Cod. Grupo", "O Cód. do Grupo deve ser informado")
            .HasMinLen(CodGrupo, 2, "Cod. Grupo", "O Cód. do Grupo deve possuir no mínimo 2 caracteres")
            .HasMaxLen(CodGrupo, 3, "Cod. Grupo", "O Cód. do Grupo deve possuir no máximo 3 caracteres")


            );
        }

    }
}
