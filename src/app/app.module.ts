import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { PeopleIncomePipe } from './pipes/people-income.pipe';

import { Routes, RouterModule} from '@angular/router';
import { FiltredComponent } from './components/product/filtred/filtred.component';
import { SummaryComponent } from './components/summary/summary/summary.component';
import { CardComponent } from './components/summary/card/card.component';
import { LineComponent } from './components/product/filtred/line/line.component'

const appRoutes: Routes = [
  {
    path: 'Navigator', 
    component: ProductComponent, 
    
  },
  {
    path: '', 
    component: SummaryComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PeopleIncomePipe,
    FiltredComponent,
    SummaryComponent,
    CardComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
