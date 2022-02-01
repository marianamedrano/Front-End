import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemasComponent } from './temas/temas.component';
import { FeedComponent } from './feed/feed.component';
import { MenulogadoComponent } from './menulogado/menulogado.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { DeletePostagemComponent } from './delete/delete-postagem/delete-postagem.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    SobreComponent,
    InicioComponent,
    TemasComponent,
    FeedComponent,
    MenulogadoComponent,
    PostagemEditComponent,
    DeletePostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
