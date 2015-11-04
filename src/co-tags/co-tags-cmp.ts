import { Component, NgFor } from 'angular2/angular2'

@Component({
  selector: 'co-tags',
  template: `
    <input class="form-control" (keyup)="typing($event)" style="width: 150px;">
    <span class="label label-info" style="margin-right: 5px;" *ng-for="#tag of tags">
      <span (click)="removeTag(tag)" style="cursor: pointer;">{{tag}}</span>
    </span>
  `,
  inputs: ['tags'],
  directives: [NgFor]
})
export class CoTagsCmp {

  tags: Array<any>

  onInit () {
    console.log(this.tags)
  }

  typing ($event) {
    if ($event.keyCode === 13) {
      this.addTag($event.target.value)
      $event.target.value = ''
    }
  }

  addTag (newTag) {
    let exists = this.tags.some((tag) => {
      return tag === newTag
    })
    if (!exists) {
      this.tags.push(newTag)
    } else {
      console.log('already exists')
    }
  }

  removeTag (tagToRemove) {
    this.tags.splice(this.tags.indexOf(tagToRemove), 1)
  }
}