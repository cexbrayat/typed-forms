import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
