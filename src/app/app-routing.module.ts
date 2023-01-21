import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';

const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },

  {
    path: 'base',
    component: BaseComponent,
    children:[{
      path:'siteugm',
      loadChildren:()=>import('./views/pages/components/components.module').then(m =>m.ComponentsModule)
    }]

  },
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
