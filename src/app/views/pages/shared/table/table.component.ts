import { Component, Input } from '@angular/core';
import { Data } from '../models/datageniric';
import { Appartement } from 'src/app/core/model/appartement';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
   @Input() datas:Data[]=[];
  constructor() {}
  ngOnInit(){}
}
