import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { LoginPage} from '../pages/login/login';
import { AnalyticsService } from '../providers/analytics/analytics-service';
import { LoginService } from '../providers/login/login-service';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    OrganisationsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    OrganisationsPage,
    LoginPage
  ],
  providers: [ {provide: ErrorHandler, useClass: IonicErrorHandler},
  AnalyticsService,
  LoginService
  ]
})
export class AppModule {}
