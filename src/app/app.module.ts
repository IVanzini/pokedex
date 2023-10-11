import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MenuComponent } from './components/menu/menu.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonAttackComponent } from './components/pokemon-attack/pokemon-attack.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';
import { ArticoloPreviewComponent } from './components/articolo-preview/articolo-preview.component';
import { ArticoloDetailComponent } from './components/articolo-detail/articolo-detail.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PokemonsListComponent,
    PokemonDetailsComponent,
    PokemonAttackComponent,
    PokemonsComponent,
    BlogComponent,
    ArticoliListComponent,
    ArticoloPreviewComponent,
    ArticoloDetailComponent,
    ArticoloAddComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
