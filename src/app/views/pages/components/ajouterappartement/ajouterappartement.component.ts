import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { forkJoin, take } from 'rxjs';
import { Appartement } from 'src/app/core/model/appartement';
import { AppartementService } from 'src/app/core/services/appartement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouterappartement',
  templateUrl: './ajouterappartement.component.html',
  styleUrls: ['./ajouterappartement.component.css']
})
export class AjouterappartementComponent {
  table:boolean=false;
  selectedFile!: File;
  appartements!:Appartement[];
  @ViewChild('input_file')
  InputFileVariable!: ElementRef;

  constructor(
    private appartservice:AppartementService,
    private fb: UntypedFormBuilder,
  ) {

    }

    appartementform = this.fb.group({
      name: [''],
      image:[''],
      prix: [''],
      ville: [''],
      desc: [''],



    });


    ngOnInit(): void {
      this.index();

    }
  ajouter()
  {
    this.table=!this.table;
  }
  onFileChange(event: any ) {
    this.selectedFile = event.target.files[0];
  }
  ajouterappartement()
  {
     this.appartservice.storeappartement(this.selectedFile,this.appartementform.value.name,this.appartementform.value.desc,this.appartementform.value.ville,this.appartementform.value.prix);
    this.sucess("appartement desirable ajoutée");


    this.table=!this.table;
    this.appartementform.controls['name'].reset();

    this.appartementform.controls['desc'].reset();

    this.appartementform.controls['ville'].reset();


    this.appartementform.controls['prix'].reset();

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
    this.appartservice.index().pipe(take(1)).subscribe((data:any)=>{
      this.appartements=data.appartements

    })
  }

  getFiles() {
    this.InputFileVariable.nativeElement.click();
  }




}
