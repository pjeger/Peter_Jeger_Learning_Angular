import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {routes} from "./app/app.routes";
import * as path from "node:path";
import {smiteTwoGodList} from "./app/Shared/Models/mock-smiteTwoGod";
import {SmiteGodsListComponent} from "./app/smite-gods-list/smite-gods-list.component";
import {SmiteGodsListItemComponent} from "./app/smite-gods-list-item/smite-gods-list-item.component";


const routes: Routes = [
  {path: '', redirectTo: '/smiteTwoGods', pathMatch: 'full'},
  {path: 'smiteTwoGods', component: SmiteGodsListComponent},
  {path: 'smiteTwoGods/:id', component: SmiteGodsListItemComponent},
]
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .then(r => console.log('Bootstrap successful'))
