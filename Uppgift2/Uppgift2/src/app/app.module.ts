import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CvComponent } from './views/cv/cv.component';
import { PersonligtbrevComponent } from './views/personligtbrev/personligtbrev.component';
import { KontaktaComponent } from './views/kontakta/kontakta.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    CvComponent,
    PersonligtbrevComponent,
    KontaktaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
