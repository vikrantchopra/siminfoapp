import { Component, OnInit } from '@angular/core';
import { TeamsService, Team } from './shared';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamsService]
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];
  constructor(private service: TeamsService) { }

  ngOnInit() {
    this.teams = this.service.getTeams();
  }

}
