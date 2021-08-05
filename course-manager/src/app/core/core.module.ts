import { Exception404Component } from './component/exception404/exception-404.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    NavBarComponent,
    Exception404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Exception404Component
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
