import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-video',
  templateUrl: './detalhe-video.page.html',
  styleUrls: ['./detalhe-video.page.scss'],
})
export class DetalheVideoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
