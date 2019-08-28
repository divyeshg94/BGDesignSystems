import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/globalservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }

  handleClick(event: Event) {
    this.globalService.setValue(true);
  }
}