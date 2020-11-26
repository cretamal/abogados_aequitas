import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InteriorComponent } from './component/interior/interior.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:  'home', component:  HomeComponent },
  { path:  'servicio/:id', component:  InteriorComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true, anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
