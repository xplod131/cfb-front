import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() title!: string;
  @Input() msg!: string;
  @Input() toggle: boolean = false;

  @Output() callback: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirm() {
    this.callback.emit(true);
  }

  cancel() {
    this.callback.emit(false);
  }

}
