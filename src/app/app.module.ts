import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { ReparationComponent } from './components/reparation/reparation.component';
import { AjoutDetailModalComponent } from './components/ajout-detail-modal/ajout-detail-modal.component';
import { ConfirmerSortieComponent } from './components/confirmer-sortie/confirmer-sortie.component';
import { DeposerComponent } from './deposer/deposer.component';

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
    ConfirmerSortieComponent,
    DeposerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: '' },MatDialog,MatDialogConfig],
  bootstrap: [AppComponent],
})
export class AppModule {

}
