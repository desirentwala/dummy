import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}
  hide = true;

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    const menuToggle = $('.menuToggle');
    menuToggle.addClass('d-none');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    const menuToggle = $('.menuToggle');
    body.classList.remove('login-page');
    menuToggle.removeClass('d-none');
  }
}
