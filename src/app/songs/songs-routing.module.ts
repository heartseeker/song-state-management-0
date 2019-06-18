import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongsDetailComponent } from './songs-detail/songs-detail.component';
import { SongsSelectedComponent } from './songs-selected/songs-selected.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: SongsListComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class SongsRoutingModule {
  static components = [ SongsListComponent, SongsDetailComponent, SongsSelectedComponent ];
 }
