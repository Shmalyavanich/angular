import {AbstractControl, ValidationErrors} from '@angular/forms';
import {catchError, delay, map} from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";


const delayTime = 3000;
const minCharCode = 97;
const maxCharCode = 122;
const minUpperCaseCharCode = 65;
const maxUpperCaseCharCode = 90;
const spaceCode = 32;


export const forbiddenSymbolsValidate = () => (
  ctrl: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  return forbiddenSymbolsTaken(ctrl.value).pipe(
    map(isTaken => (isTaken ? { forbiddenSymbols: true } : null)),
    catchError(() => null)
  );
}

const forbiddenSymbolsTaken = (name: string): Observable<boolean> => {
  const nameTrimed = name.trim();

  const isTaken = checkForForbiddenSymbols(nameTrimed, minCharCode, maxCharCode, minUpperCaseCharCode, maxUpperCaseCharCode, spaceCode);

  return of(isTaken).pipe(delay(delayTime));

}

const checkForForbiddenSymbols = (
  str: string,
  minCharCode: number,
  maxCharCode: number,
  minUpperCaseCharCode: number,
  maxUpperCaseCharCode: number,
  additionalCharCode: number
): boolean => {
  let result = false;

  for (let i = 0; i < str.length; i++) {
    let charIsCorrect = false;

    for (let j = minCharCode; j <= maxCharCode; j++) {
      if(str.charCodeAt(i) == j){
        charIsCorrect = true;
      }
    }

    if (!charIsCorrect){
      for (let j = minUpperCaseCharCode; j <= maxUpperCaseCharCode; j++) {
        if(str.charCodeAt(i) == j){
          charIsCorrect = true;
        }
      }
    }

    if (!charIsCorrect && str.charCodeAt(i) == additionalCharCode){
      charIsCorrect = true;
    }

    if (!charIsCorrect){
      result = true;
      break;
    }
  }

  return result;
}
