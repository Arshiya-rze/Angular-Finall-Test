import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { newSignUp } from 'src/app/models/newSignUp';


@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.scss']
})
export class NewTestComponent {
  signUpRes: newSignUp | undefined;
  router: any;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  //#region Form Group
  newSignUpFg = this.fb.group({
    nationalCodeCtrl: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    nameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    emailCtrl: ['', [Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]]
  });
  //#endregion

  //#region FormControls
  get NationalCodeCtrl(): FormControl {
    return this.newSignUpFg.get('nationalCodeCtrl') as FormControl;
  }
  get NameCtrl(): FormControl {
    return this.newSignUpFg.get('nameCtrl') as FormControl;
  }
  get EmailCtrl(): FormControl {
    return this.newSignUpFg.get('emailCtrl') as FormControl;
  }
  //#endregion

  // methodi ke ba click kardan functiuon button in ejra mishavad
  registerNewSignUp(): void {
    console.log(this.newSignUpFg.value);

    let newSignUp = {
      nationalCode: this.NationalCodeCtrl.value,
      name: this.NameCtrl.value,
      email: this.EmailCtrl.value,
    }

    this.http.post<newSignUp>('http://localhost:5000/api/NewSignUp/register', newSignUp).subscribe(
      {next: response => {
        this.signUpRes = response;
        /* this.router.navigateByUrl('');  */
        console.log(this.signUpRes);
      }}
    );
  }
}