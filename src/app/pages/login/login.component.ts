import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error: null | string = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    this.loading = true;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const data = { email, password };
    if (this.loginForm.valid) {
      this.api.login(data).subscribe(
        () => {
          this.loading = false;
        },
        (error) => {
          this.error = error.error?.message || 'Something went wrong!';
          this.loading = false;
        }
      );
    }
  }
}
