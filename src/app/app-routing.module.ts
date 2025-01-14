import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path :'home',//LOCALHOST:4200/home/dashboard
  loadChildren:() => import('./modules/home/home.module').then(m=>m.HomeModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
