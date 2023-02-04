import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/core/local.service';
import { ActualService } from 'src/app/core/services/actual.service';
import { take } from 'rxjs';
import { Actu } from 'src/app/core/model/actu';
import Swal from 'sweetalert2';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent {
  constructor(
    private actu: ActualService,
    private routes: Router,
    private fb: UntypedFormBuilder,
    private local:LocalService,
    private modalService: NgbModal,
  ) {

    }

    actus!:Actu[];
    users!:User[];
  ngOnInit(): void {
    this.index();
    this.listeusers();
  }

  index() {
return this.actu.index().pipe(take(1)).subscribe((data:any) =>{
this.actus=data.post;
this.actus.forEach(e=>{

})
})

  }
  deleteactu(id:number)
  {
this.actu.destroy(id).pipe(take(1)).subscribe({

})
this.index();
  this.sucess("actu indesirable supprimer");
  }



  alertdelete(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui, supprimer !'
    }).then((result) => {
      if (result.isConfirmed) {
this.deleteactu(id);
      }
    })
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
  }

  likeOrUnlike(id:number)
  {
this.actu.likeOrUnlike(id).pipe(take(1)).subscribe({

});
this.index();
  }


  // commentaire(id:number)
  // {
  //  this.modalService.open(CommentaireComponent);

  // }

  ferme()
  {
  this.modalService.dismissAll();
  }



  modale(id:number)
  {
    const modalRef= this.modalService.open(CommentaireComponent, { size: 'm', centered: true });
    modalRef.componentInstance.idcomment = id;
  }

  listeusers()
  {
return  this.actu.listeuser().pipe(take(1)).subscribe((data)=>{

  this.users=data.user;

})
  }


}
