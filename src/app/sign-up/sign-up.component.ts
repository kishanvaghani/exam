import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiService : ApiServiceService) {}

  ngOnInit(): void {}

  signUpForm = this.fb.group({
    email: ['eve.holt@reqres.in',Validators.required],
    password: ['', Validators.required],
  });
  signUp(){
    if(!this.signUpForm.valid){
      return;
    }
    this.apiService.signUp(this.signUpForm.value).subscribe((res: any) => {
      debugger;
      console.log(res.headers.get('content-length'));
    });
  }
}
