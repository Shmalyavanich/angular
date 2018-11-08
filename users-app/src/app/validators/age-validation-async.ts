import {AbstractControl, ValidationErrors} from '@angular/forms';
import {catchError, delay, map} from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {checkStringForUnicodeTable} from "../shared/check-in-unicode";

const delayTime = 3000;
const minNumbersCharCode = 48;
const maxNumbersCharCode = 57;


export const ageValidate = () => (
  ctrl: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  return wrongAgeTaken(ctrl.value).pipe(
    map(isTaken => (isTaken ? { wrongAge: true } : null)),
    catchError(() => null)
  );
}

const wrongAgeTaken = (age: string): Observable<boolean> => {
  const isTaken = !checkStringForUnicodeTable(age, minNumbersCharCode, maxNumbersCharCode);

  return of(isTaken).pipe(delay(delayTime));
}
