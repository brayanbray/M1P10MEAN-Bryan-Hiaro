import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { CreateComponent } from '../create/create.component';
import { ReadComponent } from '../read/read.component';
import { UpdateComponent } from '../update/update.component';
import { DeleteComponent } from '../delete/delete.component';
import { TemplateComponent } from '../template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
