// Angular
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// Primeng
import { ScrollPanelModule } from 'primeng/scrollpanel';


// App Raiz
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMenuComponent, AppSubMenuComponent } from './app.menu.component';


// Core
import { CoreModule } from './core/core.module';
import { CadastroModule } from './cadastro/cadastro.module';




@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppSubMenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Primeng
    ScrollPanelModule,

    // Modulos
    CoreModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
