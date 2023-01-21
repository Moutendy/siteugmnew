import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { LocalService } from 'src/app/core/local.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  isLoading: boolean | undefined;
  constructor(private router: Router,private local:LocalService) {
    router.events.forEach((event: any) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });

   }



  ngOnInit(): void {
  }


}
