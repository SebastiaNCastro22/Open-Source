import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/public/pages/home/home.component";
import {MarathonComponent} from "./components/marathon/marathon.component";
import {NotFoundComponent} from "./components/public/pages/not-found/not-found.component";

const routes: Routes = [
  { path: 'marathon/records', component: MarathonComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
