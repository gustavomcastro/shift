#region usings

using Flunt.Validations;
using Shift.Domain.Cadastro.EmpresaModel;
using Shift.Domain.Cadastro.ModelsEstatica.ClasseContabilModel;
using Shift.Domain.Cadastro.ModelsEstatica.GrupoModel;
using Shift.Domain.Cadastro.ModelsEstatica.TipoBloqueioModel;
using Shift.Domain.Core.Models;

#endregion

namespace Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel
{
    public class CentroCusto : Entity<CentroCusto>
    {

        //EF Core
        protected CentroCusto() {}


        public CentroCusto(string codEmpresa, long codCentroCusto, string nomeCentroCusto, string codGrupo, int codClasse, int codTipoBloqueio)
        {

            CodEmpresa          = codEmpresa;

            CodCentroCusto      = codCentroCusto;

            NomeCentroCusto     = nomeCentroCusto;

            CodGrupo            = codGrupo;

            CodClasse           = codClasse;

            CodTipoBloqueio     = codTipoBloqueio;

        }


        #region Propriedades


        public long     CodCentroCusto                  { get; private set; }

        public string   NomeCentroCusto                 { get; private set; }

        public bool     OrigemLegado                    { get; private set; }


        //FKs
        public string   CodGrupo                        { get; private set; }

        public int      CodClasse                       { get; private set; }

        public int      CodTipoBloqueio                 { get; private set; }

        
        //Propriedades de Navegacao = EF
        public virtual Empresa          Empresas        { get; private set; }

        public virtual Grupo            Grupos          { get; private set; }

        public virtual ClasseContabil   ClasseContabil  { get; private set; }

        public virtual TipoBloqueio     TipoBloqueios   { get; private set; }

        #endregion


        #region Metodos

        public void Excluir() => Excluido = true;

        #endregion
    }
}
