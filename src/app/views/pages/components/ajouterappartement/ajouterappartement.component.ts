import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { forkJoin, take } from 'rxjs';
import { AppartementClasse } from 'src/app/core/classes/appartements';
import { Appartement } from 'src/app/core/model/appartement';
import { AppartementService } from 'src/app/core/services/appartement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouterappartement',
  templateUrl: './ajouterappartement.component.html',
  styleUrls: ['./ajouterappartement.component.css']
})
export class AjouterappartementComponent {
  formulaire: boolean = false;
  selectedFile!: File;
  searchValue!: String;
  appartements!:Appartement[];
  appartement!:AppartementClasse;
  @ViewChild('input_file')
  InputFileVariable!: ElementRef;
  currentPage = 1;
  perPage = 6;
  total!: number;
  pageOffset!: number;
  pageIndex!: number;
  constructor(
    private appartservice:AppartementService,
    private fb: UntypedFormBuilder,
  ) {

    }

    appartementform = this.fb.group({
      name: ['',Validators.required],
      image:['',Validators.required],
      prix: ['',Validators.required],
      ville: ['',Validators.required],
      desc: ['',Validators.required],
    });


    ngOnInit(): void {
      this.index();
    }
  ajouter()
  {
    this.formulaire=!this.formulaire;
  }
  onFileChange(event: any ) {
    this.selectedFile = event.target.files[0];
  }
  ajouterappartement()
  {
    this.appartement = new AppartementClasse();
    this.appartement.desc=this.appartementform.value.desc;
    this.appartement.prix=this.appartementform.value.prix;
    this.appartement.ville=this.appartementform.value.ville;
    this.appartement.name=this.appartementform.value.name;
    this.appartement.file=this.selectedFile;
     this.appartservice.storeappartement(this.appartement);
  }

  sucess(message:String)
  {
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

  index()
  {
    this.appartservice.indexPage(this.currentPage,this.perPage).pipe(take(1)).subscribe((data:any)=>{
       this.appartements=data.appartements.data
       this.total = data.appartements.total;
      console.log(data);


    })
  }
  onPageChanged(page: number): void {
    this.currentPage = page;
    this.index();
  }
  getFiles() {
    this.InputFileVariable.nativeElement.click();
  }

  searchByValue() {


    return this.appartements.filter((item) => {
      if (this.searchValue.trim() === '') {
        return true;
      }else if(this.searchValue === null || this.searchValue === undefined || this.searchValue === ''){

        return item;
      } else {
        return item.ville.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) || item.user.name.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase());
      }
    })
}
async updateResults() {

  if (this.searchValue) {
    this.appartements = this.searchByValue();
  }
  else{
    this.appartservice.indexPage(this.currentPage,this.perPage).pipe(take(1)).subscribe((data:any)=>{
      this.appartements=data.appartements.data
      this.total = data.appartements.total;
     


   })
  }
}


}
