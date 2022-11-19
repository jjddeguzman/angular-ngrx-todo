import { Component, OnInit, VERSION } from '@angular/core';

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
