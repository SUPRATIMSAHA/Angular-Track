import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { CartComponent } from './cart.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { TabsComponent } from './project/tabs/tabs.component';
import { ItemComponent } from './project/item/item.component';
import { ListComponent } from './project/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    UserComponent,
    ProjectComponent,
    TabsComponent,
    ItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
