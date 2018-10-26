import {AbstractControl, ValidationErrors} from '@angular/forms';
import {catchError, delay, map} from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {checkStringForUnicodeTable} from "../shared/check-in-unicode";

const delayTime = 3000;
const spaceSymbol = ' ';
const minUpperCaseCharCode = 65;
const maxUpperCaseCharCode = 90;
const spaceCode = 32;


export const pascalCaseValidate = () => (
  ctrl: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  return pascalCaseTaken(ctrl.value).pipe(
    map(isTaken => (isTaken ? { pascalCase: true } : null)),
    catchError(() => null)
  );
}

const pascalCaseTaken = (name: string): Observable<boolean> => {
  const nameTrimed = name.trim();
  let isTaken: boolean = false;

  for (let i:number = 1; i < nameTrimed.length; i++) {
    const nameSymbol = nameTrimed.charAt(i);
    const prevNameSymbol = nameTrimed.charAt(i - 1);

    if (
      (checkStringForUnicodeTable(nameSymbol, minUpperCaseCharCode, maxUpperCaseCharCode)) &&
      (nameSymbol !== spaceSymbol) &&
      (prevNameSymbol !== spaceSymbol)
    ) {
      isTaken = true;
    }
  }

  return of(isTaken).pipe(delay(delayTime));

}
