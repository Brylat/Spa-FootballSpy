export class Match {
    public _id: number;
    public id_country: number;
    public id_league: number;
    public id_season: number;
    public id_stage: number;
    public first_half_ended_at: Date;
    public fixture_status: string;
    public fixture_status_short: string;
    public game_ended_at: Date;
    public game_started_at: Date;
    public id_referee: number;
    public id_team_season_away: number;
    public id_team_season_home: number;
    public lineup_confirmed: string;
    public number_goal_team_away: number;
    public number_goal_team_home: number;
    public referee_name: string;
    public round: string | number;
    public schedule_date: Date;
    public second_half_ended_at: Date;
    public second_half_started_at: Date;
    public spectators: number;
    public stadium: string;
    public team_season_away_name: string;
    public team_season_home_name: string;
}
