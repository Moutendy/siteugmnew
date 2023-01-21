import { Component } from '@angular/core';

@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.css']
})
export class VisiteurComponent {
table:boolean=false;

ajouter()
{
  this.table=!this.table;
}
}
