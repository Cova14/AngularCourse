import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year: number;
  fullName: string;

  constructor() {
    this.year = new Date().getFullYear() + 1;
    this.fullName = 'Arturo Covarrubias';
  }
}
