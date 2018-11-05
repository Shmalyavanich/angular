import {AbstractControl, ValidationErrors} from '@angular/forms';
import {catchError, delay, map} from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import * as moment from 'moment';

const delayTime = 3000;
const dateFormats = ['YYYY/MM/DD', 'DD MMMM YYYY', 'DD-MMM-YY'];


export const dateValidate = () => (
  ctrl: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  return wrongDateTaken(ctrl.value).pipe(
    map(isTaken => (isTaken ? { wrongDate: true } : null)),
    catchError(() => null)
  );
}

const wrongDateTaken = (date: string): Observable<boolean> => {
  return of(!moment(date, dateFormats, true).isValid()).pipe(delay(delayTime));
}

