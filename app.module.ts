import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { CommentatorComponent } from './commentator/commentator.component';
import { CricketscoreComponent } from './cricketscore/cricketscore.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FirstininningComponent } from './ininnings/firstininning/firstininning.component';
import { SecondininningComponent } from './ininnings/secondininning/secondininning.component';
import { SchedulematchComponent } from './schedulematch/schedulematch.component';
import { EditmatchComponent } from './editmatch/editmatch.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'commentator', component: CommentatorComponent } ,
    { path: 'cricketscore', component: CricketscoreComponent },
    { path: 'firstininning', component: FirstininningComponent } ,
    { path: 'secondininning', component: SecondininningComponent },
    { path: 'schedulematch', component: SchedulematchComponent },
    { path : 'editmatch/:id' , component: EditmatchComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SchedulerComponent,
    CommentatorComponent,
    CricketscoreComponent,
    FirstininningComponent,
    SecondininningComponent,
    SchedulematchComponent,
    EditmatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
