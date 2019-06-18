import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './songs-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ SongsRoutingModule.components ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    SharedModule,
  ],
  exports: [ SongsRoutingModule.components ]
})
export class SongsModule { }
