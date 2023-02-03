import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { take } from 'rxjs';
import { AppartementService } from 'src/app/core/services/appartement.service';
import { User } from 'src/app/core/model/user';
import { Appartement } from 'src/app/core/model/appartement';

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
  modale()
  {
    this.modalService.open(CommentaireComponent);
  }

  index() {
    return this.appartementservice.index().pipe(take(1)).subscribe((data:any) =>{
    this.appartements=data.appartements;
    this.appartements.forEach(e=>{
console.log(e);

    })
    })

      }
}
