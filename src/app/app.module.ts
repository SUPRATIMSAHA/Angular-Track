import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { CartComponent } from './cart.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { TabsComponent } from './project/tabs/tabs.component';
import { ItemComponent } from './project/item/item.component';
import { ListComponent } from './project/list/list.component';
import { CreateCharacterComponent } from './project/create-character/create-character.component';
import { HeaderComponent } from './project/header/header.component';


const routes: Routes = [
  {path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: ListComponent }
  ]},
  {path: 'new-character', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/characters'},
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    UserComponent,
    ProjectComponent,
    TabsComponent,
    ItemComponent,
    ListComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
