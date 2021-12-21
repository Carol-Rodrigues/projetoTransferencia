import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';

// Importando componentes do material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

// Importando componentes necessários para os Services
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms";
import { TransfersComponent } from './components/transfers/transfers-create/transfers-create.component'

// Importando componentes necessários para alterar o valor para R$ e ajustar as vírgulas e pontos
import {LOCALE_ID} from "@angular/core"
import localePt from "@angular/common/locales/pt"
import { registerLocaleData } from '@angular/common';
import { TransfersEditComponent } from './components/transfers/transfers-edit/transfers-edit.component';
import { TransfersDeleteComponent } from './components/transfers/transfers-delete/transfers-delete.component';
import { DeleteConfirmationComponent } from './components/transfers/delete-confirmation/delete-confirmation.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TransfersComponent,
    TransfersEditComponent,
    TransfersDeleteComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  entryComponents: [
    DeleteConfirmationComponent
  ],
  providers: [
    {provide: LOCALE_ID,
    useValue: "pt-BR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
