import { TavlaComponent } from './produkter/tavla/tavla.component';
import { StartComponent } from './start/start.component';
import { Err404pageComponentComponent } from './shared/err404page-component/err404page-component.component';
import { NgModule, Component } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {

  enableTracing:false,
  scrollPositionRestoration:"enabled", 
  anchorScrolling: "enabled",
  scrollOffset:[10, 64],
}

const routes: Routes = [
  {path: 'start', component: StartComponent},  
  {path: 'tavla', component: TavlaComponent},
  {path: '404', component: Err404pageComponentComponent},
  // {path: ':slug', component: MainPagesComponent},
  {path: '', component: StartComponent},
  {path: '**', component: Err404pageComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
