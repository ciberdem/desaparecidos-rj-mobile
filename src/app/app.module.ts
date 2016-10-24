import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Search } from '../pages/search/search';
import { List } from '../pages/list/list';
import { Details } from '../pages/details/details';
import { WebApiService } from '../providers/web-api-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Search,
    List,
    Details
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Search,
    List,
    Details
  ],
  providers: [WebApiService]
})
export class AppModule {}
