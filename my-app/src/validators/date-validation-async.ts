import {AbstractControl, ValidationErrors} from '@angular/forms';
import {catchError, delay, map} from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {checkStringForUnicodeTable} from "../shared/check-in-unicode";

const delayTime = 3000;
const minNumbersCharCode = 48;
const maxNumbersCharCode = 57;
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const monthsShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const numberOfDateParts = 3;


export const dateValidate = () => (
  ctrl: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  return wrongDateTaken(ctrl.value).pipe(
    map(isTaken => (isTaken ? { wrongDate: true } : null)),
    catchError(() => null)
  );
}

const wrongDateTaken = (date: string): Observable<boolean> => {
  const dateTrimed = date.trim();

  if(dateTrimed.indexOf('/') !== -1){
    const dateParts = dateTrimed.split('/');

    if(dateParts.length != numberOfDateParts){
      return of(true).pipe(delay(delayTime));
    } else {
      const isTaken = (dateParts[0].length == 4) &&
        (dateParts[1].length == 2) &&
        (dateParts[2].length == 2) &&
        checkStringForUnicodeTable(dateParts[0], minNumbersCharCode, maxNumbersCharCode) &&
        checkStringForUnicodeTable(dateParts[1], minNumbersCharCode, maxNumbersCharCode) &&
        checkStringForUnicodeTable(dateParts[2], minNumbersCharCode, maxNumbersCharCode);

      return of(!isTaken).pipe(delay(delayTime));
    }
  } else if(dateTrimed.indexOf(' ') !== -1){
    const dateParts = dateTrimed.split(' ');

    if(dateParts.length != numberOfDateParts){
      return of(true).pipe(delay(delayTime));
    } else {
      const isTaken = (dateParts[0].length == 2) &&
        (dateParts[2].length == 4) &&
        checkStringForUnicodeTable(dateParts[0], minNumbersCharCode, maxNumbersCharCode) &&
        (months.indexOf(dateParts[1]) !== -1) &&
        checkStringForUnicodeTable(dateParts[2], minNumbersCharCode, maxNumbersCharCode);

      return of(!isTaken).pipe(delay(delayTime));
    }
  } else if(dateTrimed.indexOf('-') !== -1){
    const dateParts = dateTrimed.split('-');

    if(dateParts.length != numberOfDateParts){
      return of(true).pipe(delay(delayTime));
    } else {
      const isTaken = (dateParts[0].length == 2) &&
        (dateParts[1].length == 3) &&
        (dateParts[2].length == 2) &&
        checkStringForUnicodeTable(dateParts[0], minNumbersCharCode, maxNumbersCharCode) &&
        (monthsShort.indexOf(dateParts[1]) !== -1) &&
        checkStringForUnicodeTable(dateParts[2], minNumbersCharCode, maxNumbersCharCode);

      return of(!isTaken).pipe(delay(delayTime));
    }
  } else {
    return of(true).pipe(delay(delayTime));
  }

}

