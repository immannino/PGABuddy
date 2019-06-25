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
import { ScoreColorPipe, TrimDatePipe, FilterPositionPipe, FilterScorePipe, IsCutPipe, FormatDatePipe } from '../lib/utils/pga.pipes';
import { AutoRefreshComponent } from './components/auto-refresh/auto-refresh.component';
import { TigerComponent } from './components/tiger/tiger.component';
import { DetailedLeaderboardComponent } from './components/detailed-leaderboard/detailed-leaderboard.component';
import { PlayerComponent } from './components/leaderboard/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeaderboardComponent,
    TigerComponent,
    DetailedLeaderboardComponent,
    AutoRefreshComponent,
    PlayerComponent,
    ScoreColorPipe,
    TrimDatePipe,
    FilterPositionPipe,
    FilterScorePipe,
    IsCutPipe,
    FormatDatePipe
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
