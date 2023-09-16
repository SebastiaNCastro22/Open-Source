import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatTableComponent} from "./components/cat-table/cat-table.component";

const routes: Routes = [
  {path: 'home', component: CatTableComponent},
  {path: '',pathMatch: 'full', redirectTo: 'home'},
  {path: '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
