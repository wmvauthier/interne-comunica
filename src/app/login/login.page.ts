import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  checkBoxLoginInterne: boolean = true;
  checkBoxLoginGoogle: boolean = true;

  exibirForm = false;
  exibirLoginGogole = false;
  exibirLoginAd = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  exibirTipoLogin(id: number) {

    if (id === 1) {
      this.exibirLoginAd = true;
      this.exibirLoginGogole = false;
      this.checkBoxLoginInterne = true;
      this.checkBoxLoginGoogle = false;
    } else if (id === 2) {
      this.exibirLoginAd = false;
      this.exibirLoginGogole = true;
      this.checkBoxLoginInterne = true;
      this.checkBoxLoginGoogle = false;
    }
  }

  go(page) {
    switch (page) {
      case 0:
        this.router.navigateByUrl('/home');
        break;
      case 1:
        this.router.navigateByUrl('/video');
        break;
      case 2:
        this.router.navigateByUrl('/comunicado');
        break;
      case 3:
        this.router.navigateByUrl('/covid');
        break;
      default:
        break;
    }
  }

  loginGoogle() {
    this.go(0);
  }

  loginAD() {
    this.go(0);
  }

}
