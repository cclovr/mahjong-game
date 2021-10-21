import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardItemModule } from '../components/card-item/card-item.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      CardItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
