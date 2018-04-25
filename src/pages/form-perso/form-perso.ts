import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NgModel } from '@angular/forms';

/**
 * Generated class for the FormPersoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@NgModule()
@Component({
  selector: 'page-form-perso',
  templateUrl: 'form-perso.html',
})
export class FormPersoPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPersoPage');
  }

  logForm(form) {
    console.log(form.value);
    console.log(form.value.strength);
  }

}
