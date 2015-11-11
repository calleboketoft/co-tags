import { Component, NgFor } from 'angular2/angular2'

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
    <span class="label label-info" *ng-for="#tag of tags">
      <span (click)="removeTag(tag)">{{tag}}</span>
    </span>
  `,
  inputs: ['tags'],
  directives: [NgFor]
})
export class CoTagsCmp {

  tags: Array<any>

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