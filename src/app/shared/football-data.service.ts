import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { HttpClient } from '@angular/common/http';

import { ApiResponse } from './objects-template/api-response';
import { AccessToken } from './objects-template/access-token';
import { SimpleCountry } from './objects-template/simple-country';
import { Event } from './objects-template/event';
import { Match } from './objects-template/match';
import { League } from './objects-template/league';
import { Player } from './objects-template/player';
import { Season } from './objects-template/season';
import { Stand } from './objects-template/stand';
import { Stage } from './objects-template/stage';
import { Stat } from './objects-template/stat';
import { Team } from './objects-template/team';
import { TeamSeason } from './objects-template/team-season';
import { TeamSeasonPlayer } from './objects-template/team-season-player';

@Injectable()
export class FootballDataService {
  static CurrentAccesToken: Observable<AccessToken>;

  private BASE_API_URL = 'https://api.sportdeer.com/v1/';
  private REFRESH_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YWRiMWY5ZTI3OTNiYjU2ODI2NTg3NDYiLCJpYXQiOjE1MjQzMDk5NTR9.ZuXvnZwCGpRLuP0gypum63omAC9zXGKRC5vo5F98mwc';

  constructor(private http: HttpClient) { }

  // TODO store current key 30 min
  public getAccesKey() {
     return this.http.get<AccessToken>(this.BASE_API_URL + 'accessToken?refresh_token=' + this.REFRESH_KEY);
  }

  public GetAllCountry() {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<SimpleCountry[]>>(this.BASE_API_URL + 'countries?access_token=' + x.new_access_token);
    });
  }

  public GetCountryById(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<SimpleCountry[]>>(this.BASE_API_URL + 'countries/' + id + '?access_token=' + x.new_access_token);
    });
  }

  public GetEventsByMatchId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Event[]>>(this.BASE_API_URL + 'fixtures/' + id + '/events?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetMatchById(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'fixtures/' + id + '?access_token=' + x.new_access_token);
    });
  }

  public GetMatchBySeasonId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'seasons/' + id + '/fixtures?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetMatchByStagesId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'stages/' + id + '/fixtures?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetMatchBetweenTeamsByTeamSeasonId(teamSeasonId1: number, teamSeasonId2: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'teamSeason2teamSeason?teamSeason1=' + teamSeasonId1 + '&teamSeason2=' + teamSeasonId2 + '&page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetMatchBetweenTeamsByTeamId(teamId1: number, teamId2: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'team2team?team1=' + teamId1 + '&team2=' + teamId2 + '&page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetAllInplay(page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'inplay?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetAllInplayBySeasonId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'seasons/' + id + '/inplay?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetUpcomingByStageId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'stages/' + id + '/upcoming?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetUpcomingBySeasonId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'seasons/' + id + '/upcoming?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetUpcomingByDate(dateFrom: Date, dateTo: Date, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Match[]>>(this.BASE_API_URL + 'upcoming?dateFrom=' + dateFrom.toISOString() + '&dateTo=' + dateTo.toISOString() + '&page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetAllLeagues(page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<League[]>>(this.BASE_API_URL + 'leagues?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetLeaguesByCountryId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<League[]>>(this.BASE_API_URL + 'countries/' + id + '/leagues?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetLeagueById(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<League[]>>(this.BASE_API_URL + 'leagues/' + id + '?access_token=' + x.new_access_token);
    });
  }

  public GetLineupByMatchId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Player[]>>(this.BASE_API_URL + 'fixtures/' + id + '/lineups?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetPlayerById(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Player[]>>(this.BASE_API_URL + 'players/' + id + '?access_token=' + x.new_access_token);
    });
  }

  public GetAllSeasons(page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Season[]>>(this.BASE_API_URL + 'seasons?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetAllSeasonsByLeagueId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Season[]>>(this.BASE_API_URL + 'leagues/' + id + '/seasons?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetSeasonsById(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Season[]>>(this.BASE_API_URL + 'seasons/' + id + '?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetAllStages(page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Stage[]>>(this.BASE_API_URL + 'stages?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetAllStagesBySeasonId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Stage[]>>(this.BASE_API_URL + 'seasons/' + id + '/stages?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetStageById(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Stage[]>>(this.BASE_API_URL + 'stages/' + id + '?access_token=' + x.new_access_token);
    });
  }

  public GetStandingByStageId(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Stand[]>>(this.BASE_API_URL + 'stages/' + id + '/standing?access_token=' + x.new_access_token);
    });
  }

  public GetStatsByMatchId(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Stat[]>>(this.BASE_API_URL + 'fixtures/' + id + '/stats?access_token=' + x.new_access_token);
    });
  }

  public GetStatsByTeamSeasonId(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Stat[]>>(this.BASE_API_URL + 'teamSeasons/' + id + '/stats?access_token=' + x.new_access_token);
    });
  }

  public GetStatsByTeamSeasonPlayerId(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Stat[]>>(this.BASE_API_URL + 'teamSeasonPlayers/' + id + '/stats?access_token=' + x.new_access_token);
    });
  }

  public GetTeamById(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<Team[]>>(this.BASE_API_URL + 'teams/' + id + '?access_token=' + x.new_access_token);
    });
  }

  public GetTeamSeasonById(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<TeamSeason[]>>(this.BASE_API_URL + 'teamSeasons/' + id + '?access_token=' + x.new_access_token);
    });
  }

  public GetTeamsSeasonBySeasonId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<TeamSeason[]>>(this.BASE_API_URL + 'seasons/' + id + '/teamSeasons?page=' + page + '&access_token=' + x.new_access_token);
    });
  }

  public GetTeamSeasonPlayerById(id: number) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<TeamSeasonPlayer[]>>(this.BASE_API_URL + 'teamSeasonPlayers/' + id + '?access_token=' + x.new_access_token);
    });
  }

  public GetTeamSeasonPlayersByTeamSeasonId(id: number, page: number = 1) {
    return this.getAccesKey().flatMap(x => {
      return this.http.get<ApiResponse<TeamSeasonPlayer[]>>(this.BASE_API_URL + 'teamSeasons/' + id + '/teamSeasonPlayers?page=' + page + '&access_token=' + x.new_access_token);
    });
  }
}
