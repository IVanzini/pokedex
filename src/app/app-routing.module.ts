import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';
import { ArticoloDetailComponent } from './components/articolo-detail/articolo-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // {
  //   path:"pokemons", 
  //   component: PokemonsListComponent
  // },
  // {
  //   path:"", 
  //   redirectTo:"/pokemons", pathMatch:"full"
  // },
  // {path:"pokemons/:id", component: PokemonDetailsComponent}

  {
    path:"", 
    redirectTo:"/pokemons", pathMatch:"full"
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"register", component: RegisterComponent
  },
  {
    path:"pokemons", 
    component: PokemonsComponent,
    children: [
    {path:"", component: PokemonsListComponent},
    {path:":codice", component: PokemonDetailsComponent}
    ]
  },
  {
    path:"blog", 
    component: BlogComponent,
    children: [
    {path:"", component: ArticoliListComponent},
    {path:"nuovo", component: ArticoloAddComponent},
    {path:":id", component: ArticoloDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
