import { Component } from '@angular/core';

@Component({
  selector: 'to-do-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-app';
  list: string[] = [];

  public addTaskToList(val: any): void {
    this.list.push(val);
  }

  public removeItem(todo: any): void {
    const index = this.list.findIndex(val => val === todo);
    this.list.splice(index, 1);
  }
}

