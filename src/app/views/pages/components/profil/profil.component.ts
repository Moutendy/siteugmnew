import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(
    private fb: FormBuilder
  ) { }
  myFiles!: File ;
  myFilesCouverture: string[] = [];
  @ViewChild('input_file')
  InputFileVariable!: ElementRef;
  ngOnInit(): void {

        }

        onChange(event: any) {
          for (var i = 0; i < event.target.files.length; i++) {
           console.log(event.target.files[i]);
            this.myFiles=event.target.files[i];
          }

          if(event.target.files.length > 0){
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

          for (var i = 0; i < event.target.files.length; i++) {
            this.myFilesCouverture.push(event.target.files[i]);

          }

          if(event.target.files.length > 0){
            this.InputFileVariable.nativeElement.value = "";
          }
        }


        sendprofil()
        {
console.log(this.myFiles.name);

        }
}
