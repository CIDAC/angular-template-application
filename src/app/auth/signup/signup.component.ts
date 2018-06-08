// Angular imports
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Application imports
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear());
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password

    }).subscribe(result => {
      alert('Usuário registrado com sucesso.');
      this.router.navigate(['/']);
    });
  }

}
