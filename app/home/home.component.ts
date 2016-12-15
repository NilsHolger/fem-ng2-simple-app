import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the home body';
  message: string = '';

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.message = this.stateService.getMessage();
  }

  updateMessage(msx: string): void {
    this.stateService.setMessage(msx);
  }
}
