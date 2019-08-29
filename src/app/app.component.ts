import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './shared/particles.config';
import { HelperService } from './helperservice.service';
import { GlobalService } from './shared/globalservice';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
