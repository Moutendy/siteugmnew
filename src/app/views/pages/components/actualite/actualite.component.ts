import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentaireComponent } from './commentaire/commentaire.component';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent {
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
