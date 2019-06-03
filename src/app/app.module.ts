import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PGAService } from '../lib/service/pga/pga.service';
import { StateService } from '../lib/service/state/state.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PGAService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
