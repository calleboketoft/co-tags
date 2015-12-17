import { Component } from 'angular2/angular2'
import { NgFor } from 'angular2/common'

@Component({
  selector: 'co-tags',
  styles: [`
    .form-control {
      width: 150px;
    }
    .label {
      margin-right: 5px;
    }
    .span {
      cursor: pointer;
    }
  `],
  template: `
    <input class="form-control" (keyup)="typing($event)">
    <span class="label label-info" *ngFor="#tag of tags">
      <span (click)="removeTag(tag)">{{tag}}</span>
    </span>
  `,
  inputs: ['tags'],
  directives: [NgFor]
})
export class CoTagsCmp {

  tags: Array<string>

  typing ($event) {
    if ($event.keyCode === 13) {
      this.addTag($event.target.value)
      $event.target.value = ''
    }
  }

  addTag (newTag) {
    let exists = this.tags.some(tag => tag === newTag)
    if (!exists) {
      this.tags.push(newTag)
    }
  }

  removeTag (tagToRemove) {
    this.tags.splice(this.tags.indexOf(tagToRemove), 1)
  }
}