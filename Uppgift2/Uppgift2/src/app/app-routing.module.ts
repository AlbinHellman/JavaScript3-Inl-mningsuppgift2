import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonligtbrevComponent } from './views/personligtbrev/personligtbrev.component';
import { CvComponent } from './views/cv/cv.component';
import { KontaktaComponent } from './views/kontakta/kontakta.component';

const routes: Routes = [
  { path: '', component: PersonligtbrevComponent },
  { path: 'cv', component: CvComponent },
  { path: 'kontakta', component: KontaktaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
