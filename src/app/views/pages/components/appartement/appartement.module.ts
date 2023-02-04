import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommentaireComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AppartementModule { }
