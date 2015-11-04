import { Component } from 'angular2/angular2'
import { CoTagsCmp } from '../co-tags/co-tags-cmp'

@Component({
  selector: 'app',
  directives: [CoTagsCmp],
  template: `
    <h3>co-tags</h3>
    <co-tags [tags]="tags"></co-tags>
  `
})
export class AppCmp {
  constructor () {
    this.tags = ['biff', 'buff', 'boff']
  }
}
