import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { LocalService } from 'src/app/core/local.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth: AuthService,
    private routes: Router,
    private fb: UntypedFormBuilder,
    private local:LocalService) { }
  profileForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    password_confirmation:['']


  });
  ngOnInit(): void {
  }



  register()
  {

    this.auth.register(this.profileForm.value.email,this.profileForm.value.password, this.profileForm.value.name, this.profileForm.value.password_confirmation).pipe(take(1)).subscribe((data:any) => {
    this.local.saveData('token',data.token);
    this.local.saveData('name',data.user.name);
    this.sucess("Bienvenu "+this.local.getData("name"));
    this.routes.navigate(['/base/siteugm/actualite']);


    },
    error => {
      if (error.status === 401 || error.status === 403) {
        this.error('Combinaison Login/Mot de passe incorrecte !');
      } else {
        this.error('Une erreur s\'est produite. Veuillez essayer plus tard !');
      }
    }
)
  }

  error(msg: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: false,
      color: '#06417d'
    })

    Toast.fire({
      icon: 'warning',
      title: msg
    })
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
  login()
  {
    this.routes.navigate(['auth/login']);
  }
}
