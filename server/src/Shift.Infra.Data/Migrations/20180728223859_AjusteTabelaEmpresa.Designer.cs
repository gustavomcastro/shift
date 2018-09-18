﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Shift.Infra.Data.Context;

namespace Shift.Infra.Data.Migrations
{
    [DbContext(typeof(ShiftContext))]
    [Migration("20180728223859_AjusteTabelaEmpresa")]
    partial class AjusteTabelaEmpresa
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Shift.Domain.Cadastro.EmpresaModel.Empresa", b =>
                {
                    b.Property<string>("CodEmpresa")
                        .HasColumnType("varchar(04)")
                        .HasMaxLength(4);

                    b.Property<bool>("Excluido");

                    b.Property<int>("IdSituacao");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.HasKey("CodEmpresa");

                    b.HasIndex("IdSituacao");

                    b.ToTable("Empresas","Cadastro");
                });

            modelBuilder.Entity("Shift.Domain.Cadastro.ModelsEstatica.SituacaoModel.Situacao", b =>
                {
                    b.Property<int>("IdSituacao");

                    b.Property<DateTime>("DataCadastro")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("date")
                        .HasDefaultValue(new DateTime(2018, 7, 28, 0, 0, 0, 0, DateTimeKind.Local));

                    b.Property<string>("DescSituacao")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<bool>("Excluido");

                    b.HasKey("IdSituacao");

                    b.ToTable("Situacao","Estatico");
                });

            modelBuilder.Entity("Shift.Domain.Cadastro.ModelsEstatica.TipoBloqueioModel.TipoBloqueio", b =>
                {
                    b.Property<int>("Codigo")
                        .HasColumnType("int");

                    b.Property<bool>("Excluido");

                    b.Property<string>("Tipo")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.HasKey("Codigo");

                    b.ToTable("TipoBloqueio","Estatico");
                });

            modelBuilder.Entity("Shift.Domain.Cadastro.EmpresaModel.Empresa", b =>
                {
                    b.HasOne("Shift.Domain.Cadastro.ModelsEstatica.SituacaoModel.Situacao", "Situacao")
                        .WithMany("Empresas")
                        .HasForeignKey("IdSituacao");
                });
#pragma warning restore 612, 618
        }
    }
}
