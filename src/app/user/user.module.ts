import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EditUserComponent }])
  ]
})
export class UserModule { }
