import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerAdmin } from 'src/app/models/registerAdmin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent {
  globAdminRegister: registerAdmin | undefined;
  globError: string | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private adminService: AdminService) { }

  registerFg = this.fb.group({
    emailCtrl: ['', [Validators.required, Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]],
    passwordCtrl: ['', [Validators.required, Validators.minLength(8)]],
    confirmPasswordCtrl: ['', [Validators.required, Validators.minLength(8)]],
  });

  get EmailCtrl(): FormControl {
    return this.registerFg.get('emailCtrl') as FormControl;
  }
  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }
  get ConfirmPasswordCtrl(): FormControl {
    return this.registerFg.get('confirmPasswordCtrl') as FormControl;
  }

  registerAdmin(): void {
    let adminRegisterInput: registerAdmin = {
      email: this.EmailCtrl.value,
      password: this.PasswordCtrl.value,
      confirmPassword: this.ConfirmPasswordCtrl.value
    }

    this.http.post<registerAdmin>('http://localhost:5000/api/admin/register', adminRegisterInput).subscribe(
      {
        next: res => {
          this.router.navigateByUrl('');
          this.globAdminRegister = res;
        }
      }
    )
  }
}
