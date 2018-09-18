#region using

using Flunt.Validations;
using Shift.Domain.Cadastro.EmpresaModel;
using Shift.Domain.Cadastro.ModelsEstatica.GrupoModel;
using Shift.Domain.Core.Models;

#endregion

namespace Shift.Domain.Cadastro.NucleoModel
{
    public class Nucleo : Entity<Nucleo>
    {
        
        //EF CORE
        protected Nucleo() {}


        public Nucleo(string codEmpresa, string nomeNucleo, string codGrupo)
        {


            CodEmpresa  = codEmpresa;

            NomeNucleo  = nomeNucleo;

            CodGrupo    = codGrupo;


        }


        #region Propriedades


        public string NomeNucleo            { get; private set; }


        //FK
        public string CodGrupo              { get; private set; }

        
        //Propriedades de Navegacao = EF
        public virtual Empresa  Empresas    { get; private set; }

        public virtual Grupo    Grupos      { get; private set; }

        #endregion



        #region Metodos

        public void Excluir() => Excluido = true;

        #endregion
    }
}
