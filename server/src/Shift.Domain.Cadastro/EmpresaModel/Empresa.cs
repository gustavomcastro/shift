#region usings

using System.Collections.Generic;
using Flunt.Validations;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel;
using Shift.Domain.Cadastro.ModelsEstatica.SituacaoModel;
using Shift.Domain.Core.Models;
using Shift.Domain.Core.ValueObjects;

#endregion


namespace Shift.Domain.Cadastro.EmpresaModel
{
    public class Empresa : Entity<Empresa>
    {

        //Construtor Necessário para atender a uma demanda do Entity Framework
        protected Empresa() { }



        public Empresa(string codEmpresa, string nome, CNPJ cnpj, int idSituacao)
        {

            CodEmpresa  = codEmpresa;

            Nome        = nome;

            CNPJ        = cnpj;

            IdSituacao  = idSituacao;


        }



        #region Propriedades

        public string   Nome                { get; private set; }

        public CNPJ     CNPJ                { get; private set; }

        public virtual Situacao Situacao    { get; private set; }

        // EF Propriedade de Navegação. Relação é do tipo UM para MUITOS.
        public virtual ICollection<CentroCusto> CentroCustos { get; set; }

        #endregion



        #region Metodos

        public void Excluir() => Excluido = true;

        #endregion
    }
}
