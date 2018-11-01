import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidatorFn, AsyncValidatorFn} from '@angular/forms';
import {
  severalSpacesValidate,
  tooManyWordsValidate,
  pascalCaseValidate,
  forbiddenSymbolsValidate,
  ageValidate,
  dateValidate
} from '../validators/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly nameMinLength:number = 2;
  readonly nameMaxLength:number = 256;
  readonly ageMinValue:number = 18;
  readonly ageMaxValue:number = 65;

  formData : object;
  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(this.nameMinLength),
        Validators.maxLength(this.nameMaxLength)
      ], [
        severalSpacesValidate(),
        tooManyWordsValidate(),
        forbiddenSymbolsValidate(),
        pascalCaseValidate()
      ]
      ],
      age: ['', [
        Validators.required,
        Validators.min(this.ageMinValue),
        Validators.max(this.ageMaxValue)
      ],
        ageValidate()
      ],
      birthdayDate: ['', [
        Validators.required,
      ],
        dateValidate()
      ],
      loginDate: ['', [
        Validators.required,
      ],
        dateValidate()
      ],
      notificationDate: ['', [
        Validators.required,
      ],
        dateValidate()
      ],

    });
  }

  onSubmit() {
    this.formData = this.form.value;
    for (let field in this.formData) {
      this.formData[field] = this.formData[field].trim();
    }

    this.form.reset();
  }

  constructor(private fb: FormBuilder) {}
}
