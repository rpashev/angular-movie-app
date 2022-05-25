import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading = false;
  error: string | null = null;
  registerForm: FormGroup;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup(
        {
          password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
          repeatPassword: new FormControl(null),
        },
        { validators: this.passwordsValidator }
      ),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.error = null;
      const { username, email } = this.registerForm.value;
      const { password, repeatPassword } = this.registerForm.value.passwords;
      const data = { username, email, password, repeatPassword };

      this.api.signup(data).subscribe(
        () => {
          this.loading = false;
          this.router.navigate(['watchlist']);
        },
        (error) => {
          this.error = error.error?.message || 'Something went wrong!';
          this.loading = false;
        }
      );
    }
  }

  passwordsValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let repeatPass = group.get('repeatPassword')?.value;

    return pass === repeatPass ? null : { notEqual: true };
  };
}
