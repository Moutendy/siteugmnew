import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { ActualiteModule } from './actualite/actualite.module';
import { AppartementComponent } from './appartement/appartement.component';
import { AjouterappartementComponent } from './ajouterappartement/ajouterappartement.component';
import { AjouteractualiteComponent } from './ajouteractualite/ajouteractualite.component';
import { CineComponent } from './cine/cine.component';
import { VisiteurComponent } from './visiteur/visiteur.component';
import { AppartementModule } from './appartement/appartement.module';


const routes: Routes = [
  {
    path: 'actualite',
    component: ActualiteComponent
  },

  {
    path: 'appartement',
    component: AppartementComponent
  },
  {
    path: 'ajouterappartement',
    component: AjouterappartementComponent
  },
  {
    path: 'ajouteract',
    component: AjouteractualiteComponent
  },
  {
    path: 'cine',
    component: CineComponent
  },
  {
    path: 'visiteurs',
    component: VisiteurComponent
  }
]

@NgModule({
  declarations: [
    ActualiteComponent,
    AppartementComponent,
    AjouterappartementComponent,
    AjouteractualiteComponent,
    CineComponent,
    VisiteurComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ActualiteModule,
    AppartementModule
  ]
})
export class ComponentsModule { }
