import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private isShowAllSPA: boolean;
  constructor() { }

  setValue(val: boolean) {
    this.isShowAllSPA = val;
  }

  getValue() {
    return this.isShowAllSPA;
  }
}
