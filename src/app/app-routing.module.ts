import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes= [
  {path:'',redirectTo:'/ ',pathMatch:'full'},
  {path:' ',component:HeroDetailComponent},
  {path:' /:id',component:DashboardComponent},
  {path:' ',component:HeroesComponent}
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{}
