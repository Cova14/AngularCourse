import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="fontSize">
      Hola mundo... esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="fontSize = fontSize + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="fontSize = fontSize - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  fontSize: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
