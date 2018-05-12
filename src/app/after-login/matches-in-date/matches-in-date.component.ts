import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../shared/football-data.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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

  constructor(private footballDataService: FootballDataService) { }

  ngOnInit() {}

  private changeDateFrom(event: MatDatepickerInputEvent<Date>) {
    this.dateFrom = event.value;
    this.GetMatchesByDate();
  }

  private changeDateTo(event: MatDatepickerInputEvent<Date>) {
    this.dateTo = event.value;
    this.GetMatchesByDate();
  }

  private GetMatchesByDate() {
    this.footballDataService.GetUpcomingByDate(this.dateFrom, this.dateTo, 1).subscribe( data => {
      this.dataSource = data.docs;
      this.pages = data.pagination.total;
    });
  }

  private ChangePage(event: any) {
    this.GetMatchesByDatePaginator(event.pageIndex);
  }

  private GetMatchesByDatePaginator(page: number) {
    this.footballDataService.GetUpcomingByDate(this.dateFrom, this.dateTo, page).subscribe( data => {
      this.dataSource = data.docs;
    });
  }
}
