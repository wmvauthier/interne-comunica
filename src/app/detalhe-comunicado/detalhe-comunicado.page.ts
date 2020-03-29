import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-comunicado',
  templateUrl: './detalhe-comunicado.page.html',
  styleUrls: ['./detalhe-comunicado.page.scss'],
})
export class DetalheComunicadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
