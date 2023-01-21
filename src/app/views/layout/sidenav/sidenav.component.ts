import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/core/local.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private router: Router,private local:LocalService) {}
  deconn(){
    this.local.removeData('token');
    this.router.navigate(['/auth/login'])
    this.error("vous venez de vous deconnecter!!") ;
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
}
