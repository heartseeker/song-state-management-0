import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';



const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'songs',
        loadChildren: './songs/songs.module#SongsModule'
      },
      {
        path: 'p',
        loadChildren: './pages/pages.module#PagesModule'
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
