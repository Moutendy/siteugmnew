import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, isEmpty, take } from 'rxjs';
import { Actu } from 'src/app/core/model/actu';
import { ActualService } from 'src/app/core/services/actual.service';
import Swal from 'sweetalert2';
import { Data } from '../../shared/models/datageniric';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ajouteractualite',
  templateUrl: './ajouteractualite.component.html',
  styleUrls: ['./ajouteractualite.component.css']
})
export class AjouteractualiteComponent {
  table: boolean = false;
  selectedFile!: File;
  actualiter: Data[] = [];
  formulaire: boolean = false;
  @ViewChild('input_file')
  InputFileVariable!: ElementRef;
  currentPage = 1;
  perPage = 6;

  total!: number;
  pageOffset!: number;
  pageIndex!: number;

  paginate = new BehaviorSubject<any>({
    page: 1,
    pageOffset: 10
  });

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  searchValue!: String;
  filterOption!: String;
  constructor(
    private actu: ActualService,
    private routes: Router,
    private fb: UntypedFormBuilder,

  ) {

  }
  actualite = this.fb.group({
    body: [''],
    image: ['']
  });


  ngOnInit(): void {
    this.index();
    this.updateResults();

  }
  ajouter() {
    this.table = !this.table;
  }

  getFiles() {
    this.InputFileVariable.nativeElement.click();
  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    if (event.target.files.length > 0) {
      this.InputFileVariable.nativeElement.value = "";
    }
  }
  ajouteractualiter() {
    this.actu.store(this.selectedFile, this.actualite.value.body);
    this.sucess("actu desirable ajoutée");
    this.table = !this.table;
    this.actualite.controls['body'].reset();
    this.showform();
  }
showform()
{
  this.formulaire=!this.formulaire;
}
  sucess(message: String) {
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

  index() {
    this.actu.index(this.currentPage, this.perPage).pipe(take(1)).subscribe((data: any) => {
      this.actualiter = data.post.data
      this.total = data.post.total;


    })
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.index();
  }

  searchByValue() {
    return this.actualiter.filter((item) => {
      if (this.searchValue === '') {
        return item;
      } else if (this.searchValue === null || this.searchValue === undefined || this.searchValue === '') {

        return item;
      } else {
        return item.body.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) || item.user.name.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase());
      }
    })
  }
  async updateResults() {
    if (this.searchValue) {
      this.actualiter = this.searchByValue();
    }else{
      this.actu.index(this.currentPage, this.perPage).pipe(take(1)).subscribe((data: any) => {
        this.actualiter = data.post.data
        this.total = data.post.total;
      })
    }


  }
}
