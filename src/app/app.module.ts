import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeardComponent } from './views/layout/heard/heard.component';
import { SidenavComponent } from './views/layout/sidenav/sidenav.component';
import { LayoutModule } from './views/layout/layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UgmInterceptor } from './core/services/ugm.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,

  ],
  providers: [ { provide: HTTP_INTERCEPTORS,
    useClass: UgmInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
