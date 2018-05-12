import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from './shared/loading-bar/loading-bar.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-progress-bar mode="indeterminate" id="loading-bar" *ngIf="displayLoadingBar"></mat-progress-bar>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  displayLoadingBar = false;

  constructor(private _loadingBarService: LoadingBarService) { }

  ngOnInit() {
    this._loadingBarService.isOn$.subscribe(b => this.displayLoadingBar = b);
  }
}
