import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AnalyticsService } from '../../providers/analytics/analytics-service';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private analyticsService: AnalyticsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    analyticsService.logPageView("item details");
  }
}
