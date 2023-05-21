import { Component, EventEmitter, Input, Output } from '@angular/core';

import { take } from 'rxjs';
import { AppartementService } from 'src/app/core/services/appartement.service';
import { Colors, Data } from '../models/datageniric';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() searchValue!: String;
  @Input() appartements: Data[] = [];
  @Input() selectColor: String = 'red';
  currentPage = 1;
  perPage = 6;
  total!: number;
  textColor: String = 'red';
  tableColor:String='#92a8d1'
  fontSize: number = 20;
  colorstable: Colors[]=[];
  colors: String[] = ['red', 'blue','#00FFFF','#7FFFD4'];
  @Output() limitReached: EventEmitter<String> = new EventEmitter();

  constructor(private appartservice: AppartementService) { }

  searchByValue() {
    return this.appartements.filter((item) => {
      if (this.searchValue.trim() === '') {
        return true;
      } else if (this.searchValue === null || this.searchValue === undefined || this.searchValue === '') {

        return item;
      } else {
        return item.ville.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) || item['user'].name.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase());
      }
    })
  }
  updateResults() {

    if (this.searchValue) {
      this.appartements = this.searchByValue();
      this.limitReached.emit(this.searchValue);
      console.log(this.appartements);

    }
    else {
      this.appartservice.indexPage(this.currentPage, this.perPage).pipe(take(1)).subscribe((data: any) => {
        this.appartements = data.appartements.data;
        this.total = data.appartements.total;
      });
    }

  }

  changeColors() {

   this.textColor=this.selectColor;
   this.tableColor='#2c3e50'
    this.limitReached.emit(this.textColor);

  }
}
