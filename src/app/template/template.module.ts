import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { SongsModule } from '../songs/songs.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ TemplateComponent ],
  imports: [
    CommonModule,
    SongsModule,
    SharedModule,
    AppRoutingModule,
  ]
})
export class TemplateModule { }
