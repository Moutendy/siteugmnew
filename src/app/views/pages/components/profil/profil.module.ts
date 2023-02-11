import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  {
    path: 'yourprofil',
    component: ProfilComponent
  },
  {
    path:'',
    redirectTo:'yourprofil',
    pathMatch:'full'
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProfilModule { }
