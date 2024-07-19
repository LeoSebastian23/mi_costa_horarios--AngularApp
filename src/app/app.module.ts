import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment.prod';
// import { HorariosComponent } from './horarios/horarios.component';
// import { AppComponent } from './app.component';
// import { ClockLiveComponent } from './clock-live/clock-live.component';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
})
export class AppModule { }


