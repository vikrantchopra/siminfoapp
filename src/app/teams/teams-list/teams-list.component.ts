import { Component, OnInit } from '@angular/core';
import { TeamsService, Team } from '../shared';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css'],
  providers: [TeamsService]
})
export class TeamsListComponent implements OnInit {

  teams: Team[] = [];
  constructor(private service: TeamsService) { }

  ngOnInit() {
    this.teams = this.service.getTeams();
  }

}
