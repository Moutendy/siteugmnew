import { Component, Input } from '@angular/core';
import { FormBuilder, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { pipe, take } from 'rxjs';
import { LocalService } from 'src/app/core/local.service';
import { Commentaireactu } from 'src/app/core/model/commentaireactu';
import { CommentaireactuService } from 'src/app/core/services/commentaireactu.service';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  @Input() idcomment: any;
  commentaire!:Commentaireactu;
  constructor( private com: CommentaireactuService,
    private fb: UntypedFormBuilder,
    ) { }
    comForm = this.fb.group({
      comment: [''],



    });
    commentaires!:Commentaireactu[];

  ngOnInit(): void {
this.index();
  }



  index() {
    return this.com.index(this.idcomment).pipe(take(1)).subscribe((data:any) =>{
    this.commentaires=data.comments;
    this.commentaires.forEach(e=>{
      console.log(e);
    })
    })

      }


      ajouter()
      {

this.com.store(this.comForm.value.comment,this.idcomment).pipe(take(1)).subscribe((data:any)=>{
  location.reload();
});

      }
}
