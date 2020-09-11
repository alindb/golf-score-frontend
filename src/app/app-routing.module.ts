import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayRoundComponent } from './play-round/play-round.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'play-round', component: PlayRoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
