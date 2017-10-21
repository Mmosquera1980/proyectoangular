import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OpcionActualComponent } from './opcion-actual/opcion-actual.component';
import { HttpClientModule } from '@angular/common/http';

import { ChivaModule } from './chiva/chiva.module';
import { PasajeroModule} from './pasajero/pasajero.module';
import { ViajeModule } from './viaje/viaje.module';
import { TiqueteModule } from './tiquete/tiquete.module';

import { IndexChivaComponent } from './chiva/index-chiva/index-chiva.component';
import { IndexPasajeroComponent } from './pasajero/index-pasajero/index-pasajero.component';
import { IndexViajeComponent } from './viaje/index-viaje/index-viaje.component';
import{IndexTiqueteComponent} from './tiquete/index-tiquete/index-tiquete.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  } from '@angular/material';
import { CrearComponent } from './tiquete/crear/crear.component';


const appRoutes:Routes=[
  { path: "chiva/index-chiva", component:IndexChivaComponent},
  { path: "pasajero/index-pasajero", component:IndexPasajeroComponent},
  { path: "viaje/index-viaje", component:IndexViajeComponent},
  { path: "tiquete/index-tiquete", component:IndexTiqueteComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OpcionActualComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ChivaModule,
    PasajeroModule,
    ViajeModule,
    TiqueteModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,

    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,    
    MdToolbarModule,
    MdTooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
