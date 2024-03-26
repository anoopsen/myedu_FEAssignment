import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:"subscribe",component:SubscriberComponent},
  {path:"",component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
