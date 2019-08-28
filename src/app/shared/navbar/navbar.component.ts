import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = "BG Design Systems";
  navColor = "black";
  buttonColor = "white";
  @ViewChild("navBar", { static: false }) navBar: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 300) {
      this.navColor = "black";
      this.buttonColor = "white";
      console.log('You are ' + number + 'from the top to bottom');
    } else if (number > 300) {
      this.buttonColor = "black";
      this.navColor = "white";
      console.log('You are 500px from the top to bottom');
    }
  }
}
