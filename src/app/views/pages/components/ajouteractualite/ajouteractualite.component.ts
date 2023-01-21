import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouteractualite',
  templateUrl: './ajouteractualite.component.html',
  styleUrls: ['./ajouteractualite.component.css']
})
export class AjouteractualiteComponent {
  table:boolean=false;

  ajouter()
  {
    this.table=!this.table;
  }
}
