import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonTitle: string;
  @Input() buttonColor: string;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onButtonClick(event: any) {
    this.onSubmit.emit();
  }
}
