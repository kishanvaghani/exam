import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['eve.holt@reqres.in', Validators.required],
    password: ['cityslicka', Validators.required],
  });

  returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.apiService.signUp(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.id);
      debugger;
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
