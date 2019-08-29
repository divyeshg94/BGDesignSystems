import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { GlobalService } from '../globalservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = "BG Design Systems";
  logo = "../../../assets/images/Logo.png";
  navColor = "black";
  buttonColor = "white";
  @ViewChild("navBar", { static: false }) navBar: ElementRef;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {

  }

  public isShowAll(){
    return this.globalService.getValue();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // if (number < 300) {
    //   this.navColor = "black";
    //   this.buttonColor = "white";
    //   this.logo = "../../../assets/images/Logo.png";
    // } else if (number > 300) {
    //   this.buttonColor = "black";
    //   this.navColor = "white";
    //   this.logo="../../../assets/images/Logo-black.png";
    // }
  }
}
