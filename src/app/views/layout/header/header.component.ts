import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private HttpD: HttpService) {}
  selected = 'Platform';

  sidenavToggle(){
    console.log('clicked2'); 
    $('body').toggleClass('nav-close');
    
  }

  ngOnInit() {
  this.HttpD.getUsername();
    
    (function (window, document, undefined) {
      'use strict';
     

      // Initialize the media query
      const mediaQuery = window.matchMedia('(max-width: 768px)');

      // Add a listen event
      mediaQuery.addListener(doSomething);

      // Function to do something with the media query
      function doSomething(mediaQuery: any) {
        if (mediaQuery.matches) {
          $("body").addClass("nav-close");
        } else {
          //
          $("body").removeClass("nav-close");
        }
      }

      // On load
      doSomething(mediaQuery);

      // Modernizr
      // window.addEventListener('resize', function() {
      //  if (Modernizr.mq('(min-width: 560px)')) {
      //    document.body.style.backgroundColor = 'CornflowerBlue';
      //  } else {
      //    document.body.style.backgroundColor = 'FireBrick';
      //  }
      // }, false);


      

    })(window, document);

   
  }




}
