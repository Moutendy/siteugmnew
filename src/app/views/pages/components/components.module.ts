import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { ActualiteModule } from './actualite/actualite.module';

const routes: Routes = [
  {
    path: 'actualite',
    component: ActualiteComponent
  },

  // {
  //   path: 'appartement',
  //   component: AppartementComponent
  // },
  // {
  //   path: 'ajouterappartement',
  //   component: AjouterappartementComponent
  // },
  // {
  //   path: 'ajouteract',
  //   component: AjoutercatualiterComponent
  // },
  // {
  //   path: 'cine',
  //   component: CineComponent
  // },
  // {
  //   path: 'visiteurs',
  //   component: VisiteurComponent
  // }
]

@NgModule({
  declarations: [
    ActualiteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ActualiteModule
  ]
})
export class ComponentsModule { }
