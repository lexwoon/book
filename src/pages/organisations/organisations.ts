import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnalyticsService } from '../../providers/analytics/analytics-service';

/*
  Generated class for the Organisations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organisations',
  templateUrl: 'organisations.html'
})
export class OrganisationsPage {

  transIDTxt: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private analyticsService: AnalyticsService) {

  analyticsService.logPageView("organisation");

  }

  clickPrice(){
      this.analyticsService.logCustomEvent("check_price", 
      {transactionId: `${this.transIDTxt}`, transactionDate: `${new Date()}` });
  }

  clickSellMethod(){
     this.analyticsService.logCustomEvent("sell_method", 
     {transactionId: `${this.transIDTxt}`, transactionDate: `${new Date()}`});
  }

  clickRegistration(){
      this.analyticsService.logCustomEvent("car_registration", 
      {transactionId: `${this.transIDTxt}`, transactionDate: `${new Date()}`});
  }

clickEvaluation(){
   this.analyticsService.logCustomEvent("car_evaluation", 
   {transactionId: `${this.transIDTxt}`, transactionDate: `${new Date()}`});
}

clickSubmission(){
  this.analyticsService.logCustomEvent("car_submission", 
  {transactionId: `${this.transIDTxt}`, transactionDate: `${new Date()}`});
}

}
