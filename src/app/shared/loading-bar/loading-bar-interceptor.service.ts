import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

import { LoadingBarService } from './loading-bar.service';

@Injectable()
export class LoadingBarInterceptorService implements HttpInterceptor {

  constructor(private _loadingBarService: LoadingBarService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this._loadingBarService.turnOn();
    return next.handle(req)
      .pipe(
        // Log when response observable either completes or errors
        finalize(() => {
          // this._loadingBarService.turnOff();
        })
      );
  }
}
