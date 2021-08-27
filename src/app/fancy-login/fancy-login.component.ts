import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-login',
  templateUrl: './fancy-login.component.html',
  styleUrls: ['./fancy-login.component.scss']
})
export class FancyLoginComponent implements OnInit {
  signUpButton: boolean = true;
  signInButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSignUpClick() {
    this.signUpButton = !this.signUpButton;
  }
  // onSignInClick() {
  //   this.signInButton = !this.signInButton;
  // }

}
// const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");
// const container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// signInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });
