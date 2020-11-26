import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { BigBannerComponent } from './component/big-banner/big-banner.component';
import { FooterComponent } from './component/footer/footer.component';
import { BarServicesComponent } from './component/bar-services/bar-services.component';
import { SomosComponent } from './component/somos/somos.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { QueEsComponent } from './component/que-es/que-es.component';
import { MediacionComponent } from './component/mediacion/mediacion.component';
import { TarifasComponent } from './component/tarifas/tarifas.component';
import { HttpClientModule } from '@angular/common/http';
import { AgendarHoraComponent } from './component/agendar-hora/agendar-hora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// NGPRIME
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InteriorComponent } from './component/interior/interior.component';
import { LeyendaServiciosComponent } from './component/leyenda-servicios/leyenda-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BigBannerComponent,
    FooterComponent,
    BarServicesComponent,
    SomosComponent,
    ServiciosComponent,
    QueEsComponent,
    MediacionComponent,
    TarifasComponent,
    AgendarHoraComponent,
    InteriorComponent,
    LeyendaServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
