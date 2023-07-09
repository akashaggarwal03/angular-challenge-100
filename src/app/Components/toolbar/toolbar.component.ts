import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() public title: string = '';
  @Output() public titleChange: EventEmitter<string> = new EventEmitter<string>();

  updateTitle(){
   this.title= 'Updated Title';
   this.titleChange.emit(this.title);
  }

}
