import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardCelebrityPage } from '../pages/card-celebrity/card-celebrity'
import { CardMadonnaPage } from '../pages/card-madonna/card-madonna'
import { CardWillisPage } from '../pages/card-willis/card-willis'
import { FormPersoPage } from '../pages/form-perso/form-perso'
import { CardComponent } from '../components/card/card';

//import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardCelebrityPage,
    CardMadonnaPage,
    CardWillisPage,
    FormPersoPage,
    CardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CardCelebrityPage,
    CardMadonnaPage,
    CardWillisPage,
    FormPersoPage,
    CardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
