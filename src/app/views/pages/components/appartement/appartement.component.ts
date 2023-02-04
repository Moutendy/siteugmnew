import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { take } from 'rxjs';
import { AppartementService } from 'src/app/core/services/appartement.service';
import { User } from 'src/app/core/model/user';
import { Appartement } from 'src/app/core/model/appartement';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
  constructor(
private appartementservice:AppartementService,
    private modalService: NgbModal,
  ) {

    }
    appartements!:Appartement[];
    users!:User[];
    ngOnInit(): void {
this.index();
    }
  modale(id:number)
  {
    const modalRef= this.modalService.open(CommentaireComponent, { size: 'm', centered: true });
    modalRef.componentInstance.idcomment = id;
  }

  index() {
    return this.appartementservice.index().pipe(take(1)).subscribe((data:any) =>{
    this.appartements=data.appartements;
    this.appartements.forEach(e=>{


    })
    })

      }


      deleteactu(id:number)
  {
this.appartementservice.destroy(id).pipe(take(1)).subscribe({

})
this.index();
  this.sucess("appartement indesirable supprimer");
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

  listeusers(id:number)
  {
return  this.appartementservice.likeOrUnlike(id).pipe(take(1)).subscribe((data)=>{

  this.index();

})
  }


 
}
