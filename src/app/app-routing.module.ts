import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { DetailedLeaderboardComponent } from './components/detailed-leaderboard/detailed-leaderboard.component';
import { TigerComponent } from './components/tiger/tiger.component';

const routes: Routes = [
  { path: '', redirectTo: '/simple', pathMatch: 'full'},
  { path: 'simple', component: LeaderboardComponent },
  { path: 'detailed', component: DetailedLeaderboardComponent },
  { path: 'tiger', component: TigerComponent },
  { path: '*', redirectTo: '/simple', pathMatch: 'full'},
  { path: '**', redirectTo: '/simple', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
