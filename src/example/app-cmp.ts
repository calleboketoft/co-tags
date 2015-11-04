import { Component } from 'angular2/angular2'
import { CoTagsCmp } from '../co-tags/co-tags-cmp'

@Component({
  selector: 'co-tags-example',
  directives: [CoTagsCmp],
  template: `
    <div class="container" style="margin-top: 25px;">
      <h3>co-tags</h3>
      <co-tags [tags]="tags"></co-tags>
    </div>
  `
})
export class AppCmp {
  tags
  constructor () {
    this.tags = ['biff', 'buff', 'boff']
  }
}
