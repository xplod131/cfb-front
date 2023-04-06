import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  @Input() title!: string;
  @Input() msg!: string;
  @Input() toggle!: boolean;

  @Output() callback: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirm(value: boolean) {
    this.callback.emit(value);
  }

}