import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonligtbrevComponent } from './views/personligtbrev/personligtbrev.component';
import { CvComponent } from './views/cv/cv.component';

const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'personligtbrev', component: PersonligtbrevComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
