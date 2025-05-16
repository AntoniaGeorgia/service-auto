import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Esențial pentru ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrareClientiComponent } from './Clienti/administrare-clienti/administrare-clienti.component';
import { ProgramariComponent } from './Clienti/programari/programari.component';
import { IstoricComponent } from './Clienti/istoric/istoric.component';
import { HomeComponent } from './home/home.component';
import { AdministrarePieseComponent } from './Piese/administrare-piese/administrare-piese.component';
import { ComandaPiesaComponent } from './Piese/comanda-piesa/comanda-piesa.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrareClientiComponent,
    ProgramariComponent,
    IstoricComponent,
    HomeComponent,
    AdministrarePieseComponent,
    ComandaPiesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

