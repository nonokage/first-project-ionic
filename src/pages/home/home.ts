import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardCelebrityPage } from '../card-celebrity/card-celebrity';
import { CardMadonnaPage } from '../card-madonna/card-madonna';
import { CardWillisPage } from '../card-willis/card-willis';
import { FormPersoPage } from '../form-perso/form-perso';

@NgModule()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = ['Ash', 'Madonna', 'Bruce Willis'];
  nextPage = FormPersoPage;

  constructor(public navCtrl: NavController) {
    

  }

  findCard(){
    this.navCtrl.push(CardCelebrityPage);
  }
  
  itemSelected(item){
    if(item === 'Ash')
      this.navCtrl.push(CardCelebrityPage);
    else if(item === 'Madonna')
      this.navCtrl.push(CardMadonnaPage);
    else
      this.navCtrl.push(CardWillisPage);
  }

}
