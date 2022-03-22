import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonTitle = 'button';

  constructor() { }

  ngOnInit(): void {
    console.log(this.buttonTitle);
  }

}
