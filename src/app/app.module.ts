import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Search } from '../pages/search/search';
import { List } from '../pages/list/list';
import { WebApiService } from '../providers/web-api-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Search,
    List
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Search,
    List
  ],
  providers: [WebApiService]
})
export class AppModule {}
