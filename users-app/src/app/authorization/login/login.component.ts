import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  ageValidate,
  dateValidate,
  forbiddenSymbolsValidate,
  pascalCaseValidate,
  severalSpacesValidate,
  tooManyWordsValidate
} from "../../../validators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData : object;
  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      login: ['',
        Validators.required,
      ],
      password: ['',
        Validators.required,
      ],
    });
  }

  onSubmit() {
    this.formData = this.form.value;
    this.form.reset();
  }

  constructor(private fb: FormBuilder) {}

}
