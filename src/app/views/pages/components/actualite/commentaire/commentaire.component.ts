import { Component, Input } from '@angular/core';
import { FormBuilder, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { pipe, take } from 'rxjs';
import { LocalService } from 'src/app/core/local.service';
import { Commentaireactu } from 'src/app/core/model/commentaireactu';
import { CommentaireactuService } from 'src/app/core/services/commentaireactu.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  @Input() idcomment: any;
  commentaire!:Commentaireactu;
  deletes:any
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

    })

      }


      ajouter()
      {

this.com.store(this.comForm.value.comment,this.idcomment).pipe(take(1)).subscribe((data:any)=>{
  location.reload();
});

      }


      delete(id:number)
      {
this.com.delete(id).pipe(take(1)).subscribe((data:any)=>{
this.deletes=data;
});
this.sucess(this.deletes.message);
      }





  sucess(message:String)
  {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: false,
      color: '#06417d'
    })

    Toast.fire({
      icon: 'success',
      title: message
    })


    location.reload();
  }
}
