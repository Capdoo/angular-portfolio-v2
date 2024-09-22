import { Component } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.css'
})
export class RepositoriesComponent {

  openNewTab(idx: number) {
    switch (idx) {
      //ingles avanzado
      case 1:
        window.open('https://github.com/Capdoo/angular-portfolio-v2', '_blank');
        break;
      //scrum fundamentals
      case 2:
        window.open('https://github.com/Capdoo/spring-blogru2-backend', '_blank');
        break;
      //ndg linux
      case 3:
        window.open('https://github.com/capdoo/angular-mascotas-frontend', '_blank');
        break;
    }
  }
}
