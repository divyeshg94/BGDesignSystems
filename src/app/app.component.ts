import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './shared/particles.config';
import { HelperService } from './helperservice.service';
import { GlobalService } from './shared/globalservice';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit{
  
  title = 'Bg Design Systems';
  constructor(private globalService: GlobalService) {
  }
  public ngOnInit(): void {
     //this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  public isShowAll(){
    return this.globalService.getValue();
  }
}
