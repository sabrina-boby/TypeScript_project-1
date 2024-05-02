import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
       {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
       },
       {
        path:"home",
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
       },
       {
        path:"about-us",
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
