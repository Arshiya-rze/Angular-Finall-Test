import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignUp } from 'src/app/models/signUp.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})

export class SignUpUserComponent {
  signUpRes: SignUp | undefined;

  shoes: string[] = ["Nike", "Jordan", "Vans", "Adidas"];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  //#region Form Group
  signUpFg = this.fb.group({
    nationalCodeCtrl: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    firstNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    ageCtrl: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
    shoesCtrl: ['', Validators.required],
    emailCtrl: ['', [Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]]
  });
  //#endregion

  //#region FormControls
  get NationalCodeCtrl(): FormControl {
    return this.signUpFg.get('nationalCodeCtrl') as FormControl;
  }
  get FirstNameCtrl(): FormControl {
    return this.signUpFg.get('firstNameCtrl') as FormControl;
  }
  get LastNameCtrl(): FormControl {
    return this.signUpFg.get('lastNameCtrl') as FormControl;
  }
  get AgeCtrl(): FormControl {
    return this.signUpFg.get('ageCtrl') as FormControl;
  }
  get shoeCtrl(): FormControl {
    return this.signUpFg.get('shoesCtrl') as FormControl;
  }
  get EmailCtrl(): FormControl {
    return this.signUpFg.get('emailCtrl') as FormControl;
  }
  //#endregion

  registerSignUp(): void {
    console.log(this.signUpFg.value);

    let signUp = {
      nationalCode: this.NationalCodeCtrl.value,
      firstName: this.FirstNameCtrl.value,
      lastName: this.LastNameCtrl.value,
      age: this.AgeCtrl.value,
      shoes: this.shoeCtrl.value,
      email: this.EmailCtrl.value,
    }

    this.http.post<SignUp>('http://localhost:5000/api/signUp/register', signUp).subscribe(
      {next: response => {
        this.signUpRes = response; 
        console.log(this.signUpRes);
      }}
    );
  }
}
