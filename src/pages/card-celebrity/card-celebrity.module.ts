import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardCelebrityPage } from './card-celebrity';

@NgModule({
  declarations: [
    CardCelebrityPage,
  ],
  imports: [
    IonicPageModule.forChild(CardCelebrityPage),
  ],
})
export class CardCelebrityPageModule {}
