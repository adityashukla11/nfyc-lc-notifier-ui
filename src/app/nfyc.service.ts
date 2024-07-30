import { Injectable } from '@angular/core';
import { NfycLcUser } from './NfycLcUser';
import { HttpClient } from '@angular/common/http';
import { of, Subject, timer } from 'rxjs';
import { catchError, concatMap, delay, takeUntil } from 'rxjs/operators';
import { Concept } from './Concepts';

@Injectable()
export class NfycService {

  constructor(private http: HttpClient) { }
  isLoading = false;
  messageIndexEmitter = new Subject<number>();
  errorMessage = '';
  apiResponse = '';
  createLcUser(data: NfycLcUser) {

    let messageIndex = 0;
    this.isLoading = true;
    const apiCall$ = this.http.post('https://nfyc-lc-notifier.azurewebsites.net/api/createlcuser'
      , data, {observe: 'response'});
    const values = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const delayedEmissions$ = of(...values).pipe(
      concatMap(value => timer(value * 1000).pipe(delay(value * 1000))));

    const messageSubscription = apiCall$.pipe(catchError(httpError => {
      return of(httpError);
    })).subscribe((response) => {
      if (response.ok) {
        this.messageIndexEmitter.next(4);
        this.isLoading = false;
        this.apiResponse = response.body;
      } else {
        this.messageIndexEmitter.next(5);
        this.errorMessage = response.error == null || response.error.message == null
          || response.error.message === '' ? 'Something went wrong' : response.error.message;
        this.isLoading = false;
      }
    });

    delayedEmissions$.pipe(
      takeUntil(apiCall$) // Stop when API call completes
    ).subscribe(() => {
        const valueToEmit = Math.min(3, messageIndex);
        this.messageIndexEmitter.next(valueToEmit);
        messageIndex++;
    });
  }
  addConceptForUser(data: Concept) {
    this.isLoading = true;
    const apiCall$ = this.http.post('https://nfyc-lc-notifier.azurewebsites.net/api/saveConcept', data, { observe: 'response' });
    return apiCall$.pipe(
      catchError(httpError => {
        this.isLoading = false;
        this.errorMessage = httpError.error?.message || 'Something went wrong. Please try again';
        return of(httpError);
      })
    ).subscribe((response) => {
      this.isLoading = false;
      if (response.ok) {
        this.apiResponse = response.body;
      } else {
        this.errorMessage = response.error?.message || 'Something went wrong. Please try again.';
      }
    });
  }

  resetService() {
    this.isLoading = false;
    this.apiResponse = null;
    this.errorMessage = null;
  }
}

