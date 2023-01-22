import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  table:boolean=false;

  ajouter()
  {
    this.table=!this.table;
  }
}
