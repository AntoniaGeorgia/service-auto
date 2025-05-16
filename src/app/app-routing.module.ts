import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrareClientiComponent } from './Clienti/administrare-clienti/administrare-clienti.component';
import { ProgramariComponent } from './Clienti/programari/programari.component';
import { IstoricComponent } from './Clienti/istoric/istoric.component';  
import { HomeComponent } from './home/home.component';
import { AdministrarePieseComponent } from './Piese/administrare-piese/administrare-piese.component';
import { ComandaPiesaComponent } from './Piese/comanda-piesa/comanda-piesa.component';

const routes: Routes = [
  {path: 'Administrare-clienti', component:AdministrareClientiComponent},
  {path:'Programari', component:ProgramariComponent},
  {path: 'Istoric', component: IstoricComponent},
   {path: 'Home', component: HomeComponent},
   {path: 'Administrare-piese', component: AdministrarePieseComponent},
    { path: 'comanda/:code', component: ComandaPiesaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
