import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsAllComponent } from './items-all/items-all.component';
import { ItemComponent } from './item/item.component';
import { ItemsCompletedComponent } from './items-completed/items-completed.component';
import { ItemsActiveComponent } from './items-active/items-active.component';
import { ItemsFilterPipe } from './pipes/items-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ItemsAllComponent,
    ItemComponent,
    ItemsCompletedComponent,
    ItemsActiveComponent,
    ItemsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
