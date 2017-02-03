import { Component } from '@angular/core';
import { AnalyticsService } from '../../providers/analytics/analytics-service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  
brandTxt:string;
modelTxt:string;
variantTxt:string;

  constructor(private analyticsService: AnalyticsService) {

          analyticsService.logPageView("hello ionic");    
  }


  clickBanner() {
    this.analyticsService.logSelectContent("1111","banner1","Image");
  }

   clickBanner2() {
    this.analyticsService.logSelectContent("2222","banner2","Image");
  }


clickSubmit()
{
  
  this.analyticsService.logViewItem(this.brandTxt,this.modelTxt, this.variantTxt );

}


}
