#region usings

using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Commands.Inputs;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Commands.Results;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Handlers;
using Shift.Domain.Cadastro.CadastrosContabeis.CentroCustoModel.Repository;
using Shift.Domain.Core.Interfaces;
using Shift.Services.Api.Configurations;

#endregion

namespace Shift.Services.Api.Controllers.Cadastro.CadastrosContabeis
{
    public class CentroCustoController : BaseController
    {


        #region Config

        private readonly CentroCustoHandler     _handler;

        private readonly ICentroCustoRepository _centroCustoRepository;

        public CentroCustoController(
                                        IUnitOfWork             uow,
                                        IUser                   user,
                                        CentroCustoHandler      centroCustoHandler,
                                        ICentroCustoRepository  centroCustoRepository) : base (uow, user)
        {

            _handler                = centroCustoHandler;

            _centroCustoRepository  = centroCustoRepository;
        }


        #endregion



        #region Escrita


        [HttpPost]
        [Route("v1/centro-custo")]
        [Authorize()]
        public IActionResult Post([FromBody] AdicionarCentroCustoCommand command)
        {

            var result = _handler.Handle(command);

            return Response(result, _handler.Notifications);

        }



        [HttpPut]
        [Route("v1/centro-custo")]
        [Authorize()]
        public IActionResult Put([FromBody] EditarCentroCustoCommand command)
        {

            var result = _handler.Handle(command);

            return Response(result, _handler.Notifications);

        }



        [HttpDelete]
        [Route("v1/centro-custo/{codEmpresa}/{codCentroCusto}")]
        [Authorize()]
        public IActionResult Delete(string codEmpresa, long codCentroCusto)
        {

            var command = new ExcluirCentroCustoCommand(codEmpresa, codCentroCusto);

            var result = _handler.Handle(command);

            return Response(result, _handler.Notifications);

        }


        #endregion



        #region Leitura

        [HttpGet]
        [Route("v1/centro-custo/{codEmpresa}")]
        [Authorize()]
        public IEnumerable<CentroCustoCommandResult> Listar([FromServices]IMemoryCache cache, string codEmpresa)
        {

      
            IEnumerable<CentroCustoCommandResult> dadosJSON = cache.GetOrCreate<IEnumerable<CentroCustoCommandResult>>("", context =>
            {

                context.SetAbsoluteExpiration(TimeSpan.FromSeconds(30));

                context.SetPriority(CacheItemPriority.High);

                return _centroCustoRepository.Listar(codEmpresa);
            });


            return dadosJSON;

        }



        [HttpGet]
        [Route("v1/centro-custo/{codEmpresa}/{codCentroCusto}")]
        [Authorize()]
        public CentroCustoCommandResult ListarPorId([FromServices]IMemoryCache cache, string codEmpresa, long codCentroCusto)
        {

            CentroCustoCommandResult dadosJSON = cache.GetOrCreate<CentroCustoCommandResult>("", context =>
            {

                context.SetAbsoluteExpiration(TimeSpan.FromSeconds(30));

                context.SetPriority(CacheItemPriority.High);

                return _centroCustoRepository.ObterPorCodigo(codEmpresa, codCentroCusto);
            });


            return dadosJSON;

        }



        [HttpGet]
        [Route("v1/centro-custo-paginados")]
        [Authorize()]
        public IActionResult ListarPaginado([FromServices]IMemoryCache cache, int pagina = 1, int qtdeItensPorPagina = 3, string filtro = null)
        {


            if (pagina <= 0 || qtdeItensPorPagina <= 0)
                return BadRequest("Os parâmetros pagina e qtdeItensPorPagina devem ser maiores que zero.");



            if (qtdeItensPorPagina > 10)
                return BadRequest("O tamanho máximo de página permitido é 10.");



            int totalRegistros = _centroCustoRepository.Buscar(e => e.Excluido == false).ToList().Count;



            int totalPaginas = (int)Math.Ceiling(totalRegistros / Convert.ToDecimal(qtdeItensPorPagina));



            if (pagina > totalPaginas)
                return BadRequest("A página solicitada não existe.");



            IEnumerable<CentroCustoCommandResult> dadosJSON = cache.GetOrCreate<IEnumerable<CentroCustoCommandResult>>("", context =>
            {

                context.SetAbsoluteExpiration(TimeSpan.FromSeconds(30));

                context.SetPriority(CacheItemPriority.High);


                var resultado = new
                {

                    dados = _centroCustoRepository.ListarPaginado(pagina, qtdeItensPorPagina, filtro),


                    paginaAtual = pagina.ToString(),


                    itensPorPagina = qtdeItensPorPagina.ToString(),


                    totalPaginas = totalPaginas.ToString(),


                    totalRegistros = totalRegistros.ToString()
                };

                return resultado.dados;
            });


            return Ok(dadosJSON);

        }

        #endregion
    }
}
