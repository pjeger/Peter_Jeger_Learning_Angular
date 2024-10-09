import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {SmiteGodsListComponent} from "./app/smite-gods-list/smite-gods-list.component";
import {SmiteGodsListItemComponent} from "./app/smite-gods-list-item/smite-gods-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes: Routes = [
  {path: '', redirectTo: '/smiteTwoGods', pathMatch: 'full'},
  {path: 'smiteTwoGods', component: SmiteGodsListComponent},
  {path: 'smiteTwoGods/:id', component: SmiteGodsListItemComponent},
  {path: 'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .then(r => console.log('Bootstrap successful'))
