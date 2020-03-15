import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacadeComponent } from './facade.component';


const routes: Routes = [
  { path: '', redirectTo: 'facade', pathMatch: 'full'},
  { path: 'facade', component: FacadeComponent,
  children:
  [
     {path:'',redirectTo:'minicio',pathMatch:'full'},
     {path: 'minicio', loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule)},
     //{path: 'mregistro', loadChildren: () => import('../registro/registro.module').then(m => m.RegistroModule)},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacadeRoutingModule { }
