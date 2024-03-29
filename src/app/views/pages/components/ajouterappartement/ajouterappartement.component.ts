import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { forkJoin, take } from 'rxjs';
import { AppartementClasse } from 'src/app/core/classes/appartements';
import { Appartement } from 'src/app/core/model/appartement';
import { AppartementService } from 'src/app/core/services/appartement.service';
import Swal from 'sweetalert2';
import { Data } from '../../shared/models/datageniric';

@Component({
  selector: 'app-ajouterappartement',
  templateUrl: './ajouterappartement.component.html',
  styleUrls: ['./ajouterappartement.component.css'],
})
export class AjouterappartementComponent {
  formulaire: boolean = false;
  selectedFile!: File;
  searchValue!: String;
  appartements: Data[] = [];
  appartement!: AppartementClasse;
  @ViewChild('input_file')
  InputFileVariable!: ElementRef;
  currentPage = 1;
  perPage = 6;
  total!: number;
  pageOffset!: number;
  pageIndex!: number;
  selectColor: String = 'red'
  constructor(
    private appartservice: AppartementService,
    private fb: UntypedFormBuilder,
  ) {

  }

  appartementform = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required],
    prix: ['', Validators.required],
    ville: ['', Validators.required],
    desc: ['', Validators.required],
  });


  ngOnInit(): void {
    this.index();

  }
  ajouter() {
    this.formulaire = !this.formulaire;
  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
  ajouterappartement() {
    this.appartement = new AppartementClasse();
    this.appartement.desc = this.appartementform.value.desc;
    this.appartement.prix = this.appartementform.value.prix;
    this.appartement.ville = this.appartementform.value.ville;
    this.appartement.name = this.appartementform.value.name;
    this.appartement.file = this.selectedFile;
    this.appartservice.storeappartement(this.appartement);
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
    this.appartservice.indexPage(this.currentPage, this.perPage).pipe(take(1)).subscribe((data: any) => {
      this.appartements = data.appartements.data
      this.total = data.appartements.total;



    })
  }
  onPageChanged(page: number): void {
    this.currentPage = page;
    this.index();
  }
  getFiles() {
    this.InputFileVariable.nativeElement.click();
  }


   updateResults() {

  }

  changeColors(event:any)
  {

  }


}
