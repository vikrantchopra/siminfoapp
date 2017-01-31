import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ScrumComponent } from './scrum/scrum.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'scrum', component: ScrumComponent },
  { path: 'kanban', component: KanbanComponent },
  { path: 'teams', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }