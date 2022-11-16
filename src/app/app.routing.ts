import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./component/home/home.component";
import { PadrecomicsComponent } from "./component/padrecomics/padrecomics.component";
import { ComicsinyeccionComponent } from "./component/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./component/personasapi/personasapi.component";

const appRoutes: Routes = [
    {path:"",component:HomeComponent},
    {path:"padrecomics",component:PadrecomicsComponent},
    {path:"comicsinyeccion",component:ComicsinyeccionComponent},
    {path:"personas",component:PersonasapiComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes);