import {Injectable} from '@angular/core';
import {Team} from './';

@Injectable()
export class TeamsService {
     private teams: Team[] = [
        {id: 1, name: 'Rhine', process: 'Kanban', scrumMaster: 'Vikrant'},
        {id: 2, name: 'Indus', process: 'Kanban', scrumMaster: 'Vikrant'},
        {id: 3, name: 'Nile', process: 'Kanban', scrumMaster: 'Vikrant'},
        {id: 4, name: 'Warriors', process: 'Kanban', scrumMaster: 'Arindam'},
        {id: 5, name: 'Knight Riders', process: 'Kanban', scrumMaster: 'Arindam'},
        {id: 6, name: 'Royals', process: 'Kanban', scrumMaster: 'Arindam'},
        {id: 7, name: 'IHE', process: 'Kanban', scrumMaster: 'Suvonkar'},
        {id: 8, name: 'Dare Devils', process: 'Kanban', scrumMaster: 'Suvonkar'},
        {id: 9, name: 'DAX', process: 'Kanban', scrumMaster: 'Suvonkar'},
        {id: 10, name: 'Mobile Architecture', process: 'Kanban', scrumMaster: 'Anita'},
        {id: 11, name: 'Mobile Capture', process: 'Kanban', scrumMaster: 'Anita'},
        {id: 12, name: 'Mobile Viewer', process: 'Kanban', scrumMaster: 'Anita'},
        {id: 13, name: 'Nolij East', process: 'Kanban', scrumMaster: 'Soumya'},
        {id: 14, name: 'Super Kings', process: 'Kanban', scrumMaster: 'Soumya'},
        {id: 15, name: 'Prod. Engg. India', process: 'Kanban', scrumMaster: 'Soumya'},
        {id: 16, name: 'Media Portal', process: 'Kanban', scrumMaster: 'Subrata'},
        {id: 17, name: 'Media Manager', process: 'Kanban', scrumMaster: 'Subrata'},
        {id: 18, name: 'Alchemist', process: 'Kanban', scrumMaster: 'Subrata'}
    ];

    constructor() {}

    getTeams() {
        return this.teams;
    }
}