import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ActuCLass } from 'src/app/core/classes/actu-class';
import { Actu } from 'src/app/core/model/actu';
import { ActualService } from 'src/app/core/services/actual.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouteractualite',
  templateUrl: './ajouteractualite.component.html',
  styleUrls: ['./ajouteractualite.component.css']
})
export class AjouteractualiteComponent {
  table:boolean=false;
  selectedFile!: File;
  actualiter!:Actu[];

  constructor(
    private actu: ActualService,
    private routes: Router,
    private fb: UntypedFormBuilder,



  ) {

    }

    actualite = this.fb.group({
      body: [''],
      image:['']



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
  ajouteractualiter()
  {
    this.actu.store(this.selectedFile,this.actualite.value.body);
    this.sucess("actu desirable ajoutée");
    this.table=!this.table;
    this.actualite.controls['body'].reset();



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
    this.actu.index().pipe(take(1)).subscribe((data:any)=>{
      this.actualiter=data.post
      console.log(this.actualiter);
    })
  }
}
