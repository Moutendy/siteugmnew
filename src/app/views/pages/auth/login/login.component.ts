import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { LocalService } from 'src/app/core/local.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService,
    private routes: Router,
    private fb: UntypedFormBuilder,
    private local:LocalService) { }
    profileForm = this.fb.group({
      email: [''],
      password: [''],


    });
  ngOnInit(): void {
    this.verify();
  }

 register()
 {
  this.routes.navigate(['auth/register']);
 }
  verify()
{
if(this.local.getData('token')){
  this.routes.navigate(['/base/siteugm/actualite']);
}else{
this.routes.navigate(['auth/login']);
}

}
  login()
  {
    this.auth.login(this.profileForm.value.email, this.profileForm.value.password).pipe(take(1)).subscribe((data:any) => {
console.log(data.user[0]);


this.local.saveData('token',data.token);
this.local.saveData('name',data.user.name);
this.local.saveData('image',data.user.image);
this.local.saveData('role',data.user[0].roles[0].name);
this.sucess("Bienvenu "+this.local.getData("name"));
this.routes.navigate(['/base/siteugm/actualite']);


    },
      (    error: { status: number; }) => {
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
}
