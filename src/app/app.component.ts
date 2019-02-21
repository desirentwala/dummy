import { Component, AfterViewInit ,ViewChild} from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import * as $ from 'jquery';
import { HeaderComponent } from './views/layout/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Platform Name';

  ngAfterViewInit() {
    $('#awz-preloader').delay(350).fadeOut(function() {
        $('body').delay(350).css({ overflow: 'visible' });
    });
  }

  @ViewChild(HeaderComponent) child:HeaderComponent;


  constructor(private router: Router) {

    router.events.subscribe( (event: Event) => {

        if (event instanceof NavigationStart) {
            // Show loading indicator
            this.child.sidenavToggle();

        }

        if (event instanceof NavigationEnd) {
            // Hide loading indicator
            
        }

        if (event instanceof NavigationError) {
            // Hide loading indicator

            // Present error to user
            console.log(event.error);
        }
    });
  }

  // sidenavToggle(){
  //   console.log('clicked');
  //   $('body').toggleClass('nav-close');
  // }


}
