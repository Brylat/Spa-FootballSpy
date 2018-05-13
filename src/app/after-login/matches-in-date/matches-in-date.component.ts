import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-matches-in-date',
  templateUrl: './matches-in-date.component.html',
  styleUrls: ['./matches-in-date.component.css']
})

export class MatchesInDateComponent implements OnInit {
  events: string[];
  public dataSource;
  public displayedColumns = ['schedule_date', 'stadium', 'team_season_home_name', 'team_season_away_name'];
  dateFrom: Date;
  dateTo: Date;
  pages: any;
  today = new Date();

  constructor(private footballDataService: FootballDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
  }

  myFilter = (d: Date): boolean => {
    return d >= this.dateFrom;
  }

  myFilter2 = (d: Date): boolean => {
    const ms = new Date().getTime() - 86400000;
    return d >= new Date(ms);
  }

  private changeDateFrom(event: MatDatepickerInputEvent<Date>) {
    this.dateFrom = event.value;
    this.GetMatchesByDate();
  }

  private changeDateTo(event: MatDatepickerInputEvent<Date>) {
    this.dateTo = event.value;
    this.GetMatchesByDate();
  }

  private GetMatchesByDate() {
    this.footballDataService.GetUpcomingByDate(this.dateFrom, new Date(this.dateTo.getTime() + 86400000), 1).subscribe(data => {
      this.dataSource = data.docs;
      this.pages = data.pagination.total;
    });
  }

  private ChangePage(event: any) {
    this.GetMatchesByDatePaginator(event.pageIndex + 1);
  }

  private GetMatchesByDatePaginator(page: number) {
    this.footballDataService.GetUpcomingByDate(this.dateFrom, new Date(this.dateTo.getTime() + 86400000), page).subscribe(data => {
      this.dataSource = data.docs;
    });
  }
  public ClickedRow(row) {
    this.router.navigate(['/teamcompare'], {queryParams: {id1: row.id_team_season_away, id2: row.id_team_season_home}});
  }
}
