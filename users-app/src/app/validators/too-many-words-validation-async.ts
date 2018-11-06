import {AbstractControl, ValidationErrors} from '@angular/forms';
import {catchError, delay, map} from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";

const delayTime = 3000;
const maxNumberOfWords = 2;
const wordsSeparator = ' ';


export const tooManyWordsValidate = () => (
  ctrl: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  return tooManyWordsTaken(ctrl.value).pipe(
    map(isTaken => (isTaken ? { tooManyWords: true } : null)),
    catchError(() => null)
  );
}

const tooManyWordsTaken = (name: string): Observable<boolean> => {
  const nameTrimed = name.trim();
  const nameParts = nameTrimed.split(wordsSeparator);
  const isTaken = nameParts.length > maxNumberOfWords;

  return of(isTaken).pipe(delay(delayTime));
}
