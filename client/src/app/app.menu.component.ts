import { Component, Input, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="model" root="true" class="layout-menu layout-main-menu clearfix"
            [reset]="reset" visible="true" parentActive="true"></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: any[];

    theme = 'blue';

    layout = 'blue';

    version = 'v3';

    constructor(public app: AppComponent) { }

    ngOnInit() {
        this.model = [

            { label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/'] },

            // Desempenho--------------------------------------------------------------------------------------------------------
            {
                label: 'Desempenho', icon: 'fa fa-fw fa-th-large',


                items: [

                    { label: 'Resultados', icon: 'fa fa-fw fa-columns' },
                    { label: 'Lançamentos', icon: 'fa fa-fw fa-table' },

                    // Metas
                    {
                        label: 'Metas', icon: 'fa fa-fw fa-bullseye',
                        items: [
                            { label: 'Manual' },
                            { label: 'Automáticas' },

                            {
                                label: 'SESI',
                                items: [
                                    { label: 'Educação' },
                                    { label: 'Saúde' },
                                ]
                            },
                            {
                                label: 'SENAI',
                                items: [
                                    { label: 'Educação' },
                                    { label: 'Tecnologia' }
                                ]
                            },
                        ]
                    },

                    // Cadastros
                    {
                        label: 'Cadastros', icon: 'fa fa-fw fa-database',
                        items: [
                            { label: 'Direcionadores' },
                            { label: 'Grandes Desafios' },
                            { label: 'Tipo de Apuração' },
                            { label: 'Tp de Apur. Regras' },
                            { label: 'Unidade de Medida' },
                            { label: 'Fontes' },
                            { label: 'Responsável' },
                            { label: 'Pont. Indicador' },
                            { label: 'Regras de Pontuação' },
                            { label: 'Faixa de Pontuação' },
                            { label: 'Bônus' },
                            { label: 'Tipo de Atuação' },
                            { label: 'Atributo Chave' },
                            { label: 'Indicadores' },
                            { label: 'Atributos' },
                        ]
                    },

                    // Administração
                    {
                        label: 'Administração', icon: 'fa fa-fw fa-laptop',
                        items: [
                            { label: 'Apurar' },
                            { label: 'Consolidar' },
                        ]
                    }
                ]
            },
            // Desempenho--------------------------------------------------------------------------------------------------------


            // Treinamentos-------------------------------------------------------------------------------------------------------
            {
                label: 'Treinamento', icon: 'fa fa-fw fa-user-plus',


                items: [

                    { label: 'Todos Treinamentos', icon: 'fa fa-fw fa-users' },
                    { label: 'Meus Treinamentos', icon: 'fa fa-fw fa-user' },
                    { label: 'Aprovar', icon: 'fa fa-fw fa-check' },

                    // Eficácias
                    {
                        label: 'Eficácias', icon: 'fa fa-fw fa-check-square',
                        items: [
                            { label: 'Minhas Eficácias' },
                            { label: 'Minha Equipe' },
                        ]
                    },

                    // Cadastros
                    {
                        label: 'Cadastros', icon: 'fa fa-fw fa-database',
                        items: [
                            { label: 'Tipos de Eventos' },
                            { label: 'Programas' }
                        ]
                    }
                ]
            },
            // Treinamentos--------------------------------------------------------------------------------------------------------


            // Ocorrencias-------------------------------------------------------------------------------------------------------
            {
                label: 'Ocorrências', icon: 'fa fa-fw fa-sticky-note',


                items: [

                    { label: 'Minhas Ocorrências', icon: 'fa fa-fw fa-th-list' },
                    { label: 'Minhas Ações', icon: 'fa fa-fw fa-user' },
                    { label: 'Eficácias', icon: 'fa fa-fw fa-check' },


                    // Cadastros
                    {
                        label: 'Cadastros', icon: 'fa fa-fw fa-database',
                        items: [
                            { label: 'Origem' },
                            { label: 'Processo' }
                        ]
                    }
                ]
            },
            // Ocorrências--------------------------------------------------------------------------------------------------------

            // Projetos-------------------------------------------------------------------------------------------------------
            {
                label: 'Projetos', icon: 'fa fa-fw fa-sitemap',


                items: [

                    { label: 'Todos Projetos', icon: 'fa fa-fw fa-tasks' },
                    { label: 'Minhas Tarefas', icon: 'fa fa-fw fa-user' },
                    { label: 'Meus Projetos', icon: 'fa fa-fw fa-clone' },

                    // Relatórios
                    {
                        label: 'Relatórios', icon: 'fa fa-fw fa-desktop',
                        items: [
                            { label: 'Teste - 001' },
                            { label: 'Teste - 002' },
                        ]
                    },

                    // Cadastros
                    {
                        label: 'Cadastros', icon: 'fa fa-fw fa-database',
                        items: [
                            { label: 'Tipos de Projetos' },
                            { label: 'Programas' }
                        ]
                    }
                ]
            },
            // Projetos--------------------------------------------------------------------------------------------------------


            // Cadastros--------------------------------------------------------------------------------------------------------
            {
                label: 'Cadastros', icon: 'fa fa-fw fa-table',


                items: [

                    // Protheus
                    {
                        label: 'Protheus', icon: 'fa fa-fw fa-gg',
                        items: [
                            {
                                label: 'Contábeis',
                                items: [
                                    { label: 'Centro de Custo' },
                                    { label: 'Item Contábil' },
                                    { label: 'Conta Contábil' },
                                    { label: 'Amarrações' },
                                    { label: 'Lanc. Contábeis' },
                                ]
                            },
                            {
                                label: 'Pessoas',
                                items: [
                                    { label: 'Profissionais' },
                                    { label: 'Rateios' },
                                    { label: 'Verbas' },
                                    { label: 'Funções' }
                                ]
                            },
                            {
                                label: 'Miscelânea',
                                items: [
                                    { label: 'Produtos' },
                                    { label: 'Patrimônio' }
                                ]
                            },

                        ]
                    },


                    // Sge
                    {
                        label: 'SGE', icon: 'fa fa-fw fa-gg',
                        items: [

                            { label: 'Modalidades' },
                            { label: 'Áreas Tecnológicas' },
                            { label: 'Cursos' },
                            { label: 'Turmas' }
                        ]
                    },


                    // SGT
                    {
                        label: 'SGT', icon: 'fa fa-fw fa-gg',
                        items: [

                            { label: 'Linhas' },
                            { label: 'Categorias' },
                            { label: 'Serviços' }
                        ]
                    },

                    // SMD
                    {
                        label: 'SMD', icon: 'fa fa-fw fa-gg',
                        items: [

                            { label: 'Und. Controle' },
                            { label: 'Produtos' },
                            { label: 'Formulários' },
                            { label: 'Clientela' },
                            { label: 'Financiamentos' }
                        ]
                    },
                ]
            },
            // Cadastros--------------------------------------------------------------------------------------------------------

            // Administração-----------------------------------------------------------------------------------------------------
            {
                label: 'Administração', icon: 'fa fa-fw fa-desktop',


                items: [

                    // Persona
                    {
                        label: 'Persona', icon: 'fa fa-fw fa-user',
                        items: [
                            { label: 'Usuários' },
                            { label: 'Permissões' },
                            { label: 'Trilha' }
                        ]
                    },


                    // Cadastros
                    {
                        label: 'Cadastros', icon: 'fa fa-fw fa-database',
                        items: [

                            // tslint:disable-next-line:quotemark
                            { label: 'Empresas', routerLink: ['/cadastro/empresas'] },
                            { label: 'Foco', },
                            { label: 'Núcleo' },
                            { label: 'Processos' }
                        ]
                    }
                ]
            },
            // Administração--------------------------------------------------------------------------------------------------------

            { label: 'Sobre', icon: 'fa fa-fw fa-book' }
        ];
    }

}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)"
                   class="ripplelink" *ngIf="!child.routerLink"
                    [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i><span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down menuitem-toggle-icon" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>

                <a (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)" class="ripplelink" *ngIf="child.routerLink"
                    [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                   [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i><span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down menuitem-toggle-icon" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>
                <div class="layout-menu-tooltip">
                    <div class="layout-menu-tooltip-arrow"></div>
                    <div class="layout-menu-tooltip-text">{{child.label}}</div>
                </div>
                <div class="submenu-arrow" *ngIf="child.items"></div>
                <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset" [parentActive]="isActive(i)"
                    [@children]="(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?
                     'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
            </li>
        </ng-template>
    `,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                display: 'block'
            })),
            state('hidden', style({
                display: 'none'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    _reset: boolean;

    _parentActive: boolean;

    activeIndex: number;

    constructor(public app: AppComponent) { }

    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }

        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {
                this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }

        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            } else {
                this.app.resetMenu = false;
            }

            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }

    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val: boolean) {
        this._reset = val;

        if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
            this.activeIndex = null;
        }
    }

    @Input() get parentActive(): boolean {
        return this._parentActive;
    }

    set parentActive(val: boolean) {
        this._parentActive = val;

        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}
