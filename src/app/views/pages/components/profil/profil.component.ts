import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { User } from 'src/app/core/model/user';
import { ProfilService } from 'src/app/core/services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  uploadForm!: FormGroup;
  bouton: boolean = false;
  boutoncouverture: boolean = false;
  constructor(
    private fb: FormBuilder,
    private profil: ProfilService
  ) { }
  myFiles!: File;
  userprofil!: User[];
  myFilesCouverture: string[] = [];
  @ViewChild('input_file')
  InputFileVariable!: ElementRef;
  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      file: ['']
    })
    this.profile();
  }

  onChange(event: any) {
    const file = event.target.files[0];
    this.uploadForm.get('file')?.setValue(file);
    this.bouton = true;
    if (event.target.files.length > 0) {
      this.InputFileVariable.nativeElement.value = "";
    }
  }


  getFiles() {
    this.InputFileVariable.nativeElement.click();
  }
  getFilesCouverture() {
    this.InputFileVariable.nativeElement.click();
  }


  onChangeCouverture(event: any) {

    const file = event.target.files[0];
    this.boutoncouverture = true;
    this.uploadForm.get('file')?.setValue(file);

    if (event.target.files.length > 0) {
      this.InputFileVariable.nativeElement.value = "";
    }
  }




  cancel() {
    this.bouton = false;
  }
  cancelcouverture() {
    this.boutoncouverture = false;
  }
  addFile() {

    this.profil.store(this.uploadForm.get('file')!.value);
    this.profile();
  }
  addCouvertue() {
    this.profil.usercouverture(this.uploadForm.get('file')!.value);

    this.profile();

  }

  profile() {
    this.profil.userprofil().pipe(take(1)).subscribe((data: any) => {
      this.userprofil = data;

    })
  }
}
