import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouterappartement',
  templateUrl: './ajouterappartement.component.html',
  styleUrls: ['./ajouterappartement.component.css']
})
export class AjouterappartementComponent {
  table:boolean=false;

  ajouter()
  {
    this.table=!this.table;
  }
}
