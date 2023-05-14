import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './views/pages/auth/guards/auth.guard';

const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },

  {
    path: 'base',
    component: BaseComponent,
    children:[{
      path:'siteugm',
      canActivate: [AuthGuard],
        data: {
          expectedRole: 'client'
        },
      loadChildren:()=>import('./views/pages/components/components.module').then(m =>m.ComponentsModule)
    }]

  },
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
