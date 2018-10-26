import {AbstractControl, ValidationErrors} from '@angular/forms';
import {catchError, delay, map} from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";

const delayTime = 3000;

export const severalSpacesValidate = () => (
  ctrl: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
  return severalSpacesTaken(ctrl.value).pipe(
    map(isTaken => (isTaken ? { severalSpaces: true } : null)),
    catchError(() => null)
  );
}

const severalSpacesTaken = (name: string): Observable<boolean> => {
  const nameTrimed = name.trim();
  let isTaken: boolean = false;

  if(nameTrimed.indexOf('  ') !== -1){
    isTaken = true;
  }

  return of(isTaken).pipe(delay(delayTime));

}
