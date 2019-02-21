import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import "owl.carousel";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  //mySlideImages = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions = { items: 4, dots: true, nav: true, margin: 15 };

  constructor() {}

  ngOnInit() {
    //this.mySlideOptions = { items: 4, dots: true, nav: true, margin: 15 };
    // var thath=this;
    this.setIFrameHeight();
  }

  // sidenavToggle1(){
  //   console.log('clicked1'); 
  //   $('body').toggleClass('nav-close');
    
  // }
  // sidenavToggle1(){
  //   console.log('clicked1'); 
  //   $('body').hide();
  // }

 
  setIFrameHeight() {
    var thath=this;
    setTimeout(function(){
    var ah=window.screen.availHeight;
    var th=$(".iframematdash")[0].offsetTop;
    
    var mheight=ah-th-125;

    var mgheight=ah-th-110;
    
    $("#idAggSpend").height(mheight);
    $("#idSpendPr").height(mheight);
    $("#idGrpSpendPr").height(mgheight);
  },1000);

  }
  onLinkClick(){

    this.setIFrameHeight();
   
    
  }
}
