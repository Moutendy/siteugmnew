import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UgmInterceptor } from 'src/app/core/services/ugm.interceptor';



@NgModule({
  declarations: [
    CommentaireComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ActualiteModule { }
