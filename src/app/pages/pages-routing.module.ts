import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'about', component: AboutComponent  },
]


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {
  static components = [ HomeComponent, AboutComponent ];
}
