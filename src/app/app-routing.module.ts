import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'addresturant',
    loadChildren: () => import('./addresturant/addresturant.module').then( m => m.AddresturantPageModule)
  },
  {
    path: 'groupdetail',
    loadChildren: () => import('./groupdetail/groupdetail.module').then( m => m.GroupdetailPageModule)
  },
  {
    path: 'resturantdetail',
    loadChildren: () => import('./resturantdetail/resturantdetail.module').then( m => m.ResturantdetailPageModule)
  },
  {
    path: 'resturantdetail/:id',
    loadChildren: () => import('./resturantdetail/resturantdetail.module').then( m => m.ResturantdetailPageModule)
  },
  {
    path: 'resturantdetail/:index',
    loadChildren: () => import('./resturantdetail/resturantdetail.module').then( m => m.ResturantdetailPageModule)
  },
  {
    path: 'editresturant',
    loadChildren: () => import('./editresturant/editresturant.module').then( m => m.EditresturantPageModule)
  },
  {
    path: 'editresturant/:id',
    loadChildren: () => import('./editresturant/editresturant.module').then( m => m.EditresturantPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
