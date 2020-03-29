import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunicado',
  templateUrl: './comunicado.page.html',
  styleUrls: ['./comunicado.page.scss'],
})
export class ComunicadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
