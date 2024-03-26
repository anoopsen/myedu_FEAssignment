import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubFooterComponent } from './sub-footer/sub-footer.component';
import { SubscriptionLinksComponent } from './subscription-links/subscription-links.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    HomepageComponent,
    SubscriberComponent,
    SubFooterComponent,
    SubscriptionLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
