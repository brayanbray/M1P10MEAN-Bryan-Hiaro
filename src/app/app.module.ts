import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { ReparationComponent } from './components/reparation/reparation.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutDetailModalComponent } from './components/ajout-detail-modal/ajout-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InscriptionComponent,
    StatistiqueComponent,
    VoitureComponent,
    ReparationComponent,
    AjoutDetailModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
