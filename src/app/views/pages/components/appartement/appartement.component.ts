import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentaireComponent } from './commentaire/commentaire.component';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
  constructor(

    private modalService: NgbModal,
  ) {

    }
    ngOnInit(): void {


    }
  modale()
  {
    this.modalService.open(CommentaireComponent);
  }
}
