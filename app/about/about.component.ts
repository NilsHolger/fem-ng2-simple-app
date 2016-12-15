import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'about',
  template: require('./about.component.html')
})
export class AboutComponent implements OnInit{
  title: string = 'About Page';
  body:  string = 'This is the about body';
  message: string = '';

  constructor(public stateService: StateService) { }

  ngOnInit() {
    this.message = this.stateService.getMessage();
  }

  updateMessage(msx: string): void {
    this.stateService.setMessage(msx);
  }
}
