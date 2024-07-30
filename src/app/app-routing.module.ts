import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NfycLcHomeComponent } from './nfyc-lc-home/nfyc-lc-home.component';
import { NfycConceptHomeComponent } from './nfyc-concept-home/nfyc-concept-home.component';



const routes: Routes = [
  {
    path: 'lc',
    component: NfycLcHomeComponent
  },
  {
    path: 'concepts',
    component: NfycConceptHomeComponent
  },
  {
    path: '**',
    redirectTo: '/lc',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload' })
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
