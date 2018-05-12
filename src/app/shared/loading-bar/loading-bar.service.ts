import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingBarService {
  private _display = new Subject<boolean>();

  constructor() { }

  get isOn$() {
    return this._display.asObservable();
  }

  turnOn(): void {
    this._display.next(true);
  }

  turnOff(): void {
    this._display.next(false);
  }

}
