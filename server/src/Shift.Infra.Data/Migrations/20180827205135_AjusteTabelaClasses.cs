﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace Shift.Infra.Data.Migrations
{
    public partial class AjusteTabelaClasses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Classes",
                schema: "Estatico");

            migrationBuilder.CreateTable(
                name: "ClasseContabeis",
                schema: "Estatico",
                columns: table => new
                {
                    Codigo = table.Column<int>(type: "int", nullable: false),
                    Nome = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClasseContabeis", x => x.Codigo);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClasseContabeis",
                schema: "Estatico");

            migrationBuilder.CreateTable(
                name: "Classes",
                schema: "Estatico",
                columns: table => new
                {
                    Codigo = table.Column<int>(type: "int", nullable: false),
                    Nome = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classes", x => x.Codigo);
                });
        }
    }
}
