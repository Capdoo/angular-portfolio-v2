import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private roter: Router) {}

  myRoute(ruta: string): void {
    this.roter.navigate([`/${ruta}`]);
  }

}
