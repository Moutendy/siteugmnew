import { Component, Input } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, forkJoin, take } from 'rxjs';

import { Commentaireappart } from 'src/app/core/model/commentaireappart';
import { CommentaireappartService } from 'src/app/core/services/commentaireappart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  @Input() idcomment: any;
  commentaire!:Commentaireappart;
  deletes:any
  constructor( private com: CommentaireappartService,
    private fb: UntypedFormBuilder,
    public activeModal: NgbActiveModal
    ) { }
    comForm = this.fb.group({
      comment: [''],



    });
    commentaires!:Commentaireappart[];
  ngOnInit(): void {
    this.index();
      }
  index() {
     this.com.index(this.idcomment).pipe(take(1)).subscribe((data:any) =>{
    this.commentaires=data.comments;

    })

      }


      ajouter()
      {

         this.com.store(this.comForm.value.comment,this.idcomment).pipe(take(1)).subscribe((data:any)=>{
  this.closeModal();
});

      }

      closeModal() {
        this.activeModal.close();
        location.reload();
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
