import { Component } from '@angular/core';
import { IAppStore } from './store';
import { NgRedux, select } from '@angular-redux/store';
import { CounterActions } from './app.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() readonly count$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppStore>,
              private actions: CounterActions) {
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
