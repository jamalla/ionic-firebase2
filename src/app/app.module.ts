import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';
import { AngularFireModule } from 'angularfire2';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

export const firebaseConfig = {
  apiKey: 'AIzaSyDKeXTtGvKtWp2Bd3nRJ7YjOX_XuONzG8k',
  authDomain: 'ionicfirebase-9b3c0.firebaseapp.com',
  databaseURL: 'https://ionicfirebase-9b3c0.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '233329978030'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReminderPage,
    ProgressBarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReminderPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
