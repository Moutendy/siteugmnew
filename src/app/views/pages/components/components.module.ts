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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppartementService } from 'src/app/core/services/appartement.service';
import { ProfilComponent } from './profil/profil.component';
import { ProfilModule } from './profil/profil.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaginationComponent } from 'src/app/pagination/pagination.component';
import { TableComponent } from '../shared/table/table.component';
import { SearchComponent } from '../shared/search/search.component';
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
  },
  { path:'profil', component:  ProfilComponent},
]

@NgModule({
  declarations: [
    ActualiteComponent,
    AppartementComponent,
    AjouterappartementComponent,
    AjouteractualiteComponent,
    CineComponent,
    VisiteurComponent,
    ProfilComponent,
    PaginationComponent,
    TableComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ActualiteModule,
    ProfilModule,
    AppartementModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule
  ],
  providers:[AppartementService]
})
export class ComponentsModule { }
