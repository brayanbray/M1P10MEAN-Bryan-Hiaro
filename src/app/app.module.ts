import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { InscriptionComponent } from './components/inscription/inscription.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { ReparationComponent } from './components/reparation/reparation.component';
import { FormsModule } from '@angular/forms';
=======
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from 'src/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
>>>>>>> parent of 2262573 (login et inscription)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
<<<<<<< HEAD
    InscriptionComponent,
    StatistiqueComponent,
    VoitureComponent,
    ReparationComponent,
=======
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
>>>>>>> parent of 2262573 (login et inscription)
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
