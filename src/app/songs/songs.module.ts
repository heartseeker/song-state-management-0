import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './songs-routing.module';
import { SharedModule } from '../shared/shared.module';
import songReducer from './store/songs.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [ SongsRoutingModule.components ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    SharedModule,
    StoreModule.forFeature('songs', songReducer),
  ],
  exports: [ SongsRoutingModule.components ]
})
export class SongsModule { }
