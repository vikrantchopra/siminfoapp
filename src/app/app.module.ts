import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {ToolbarModule} from 'primeng/primeng';
import {MenuModule,MenuItem} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';

import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ScrumComponent } from './scrum/scrum.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KanbanComponent,
    ScrumComponent,
    TeamsComponent,
    TeamsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    SplitButtonModule,
    PanelModule,
    ToolbarModule,
    MenuModule,
    FieldsetModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
