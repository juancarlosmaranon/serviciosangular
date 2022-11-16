import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PadrecomicsComponent } from './component/padrecomics/padrecomics.component';
import { HijocomicsComponent } from './component/hijocomics/hijocomics.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { ComicsinyeccionComponent } from './component/comicsinyeccion/comicsinyeccion.component';
import { ComicService } from './services/comics.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './component/personasapi/personasapi.component'
import { PersonasService } from './services/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    PadrecomicsComponent,
    HijocomicsComponent,
    HomeComponent,
    MenuComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,

  ],
  imports: [
    HttpClientModule, BrowserModule, routing, FormsModule, 
  ],
  providers: [appRoutingProviders, ComicService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
