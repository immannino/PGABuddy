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
import { ScoreColorPipe, TrimDatePipe, FilterPositionPipe, FilterScorePipe, IsCutPipe } from '../lib/utils/pga.pipes';
import { AutoRefreshComponent } from './components/auto-refresh/auto-refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeaderboardComponent,
    AutoRefreshComponent,
    ScoreColorPipe,
    TrimDatePipe,
    FilterPositionPipe,
    FilterScorePipe,
    IsCutPipe
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
