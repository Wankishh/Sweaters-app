import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule } from 'ng2-translate';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ActivityComponent } from './components/activity/activity.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routesApp: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NotFoundComponent,
    NavbarComponent,
    AboutComponent,
    ActivityComponent,
    PartnersComponent,
    ContactsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(routesApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
