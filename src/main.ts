import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {SmiteGodsListComponent} from "./app/smite-gods-list/smite-gods-list.component";
import {SmiteGodsListItemComponent} from "./app/smite-gods-list-item/smite-gods-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule, InMemoryDbService} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";


const routes: Routes = [
  {path: 'smiteTwoGods', component: SmiteGodsListComponent},
  {path: 'smiteTwoGods/:id',
    loadComponent: () =>
      import('./app/smite-gods-list-item/smite-gods-list-item.component').then(m => m.SmiteGodsListItemComponent) },
  {path: 'modify-list-item',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000}))
  ]
}).catch((err)=>console.error(err));

