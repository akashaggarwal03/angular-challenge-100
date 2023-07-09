import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-challenge-100';
  public toolbarTitle = 'Title at start';

  onToolbarTitleChange(newTitle: string) {
    this.toolbarTitle = newTitle;
  }
}
