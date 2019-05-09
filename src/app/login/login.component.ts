import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = new User();
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(res => {
      if (res === true) {
        this.router.navigate(['/home']);
      }
    });
  }
}
