import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { GlobalService } from '../shared/globalservice';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('10000ms ease-out')),
      transition('hide => show', animate('10000ms ease-in'))
    ])
  ]
})

export class HomeComponent implements OnInit {
  state = 'hide'
  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }

  handleClick(event: Event) {
    this.globalService.setValue(true);
  }

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.el.nativeElement.offsetTop
  //   const scrollPosition = window.pageYOffset

  //   if (scrollPosition >= componentPosition) {
  //     this.state = 'show'
  //   } else {
  //     this.state = 'show'
  //   }
  // }
}