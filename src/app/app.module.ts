import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeardComponent } from './views/layout/heard/heard.component';
import { SidenavComponent } from './views/layout/sidenav/sidenav.component';
import { LayoutModule } from './views/layout/layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UgmInterceptor } from './core/services/ugm.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS,
    useClass: UgmInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
