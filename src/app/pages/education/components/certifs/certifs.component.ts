import { Component } from '@angular/core';

@Component({
  selector: 'app-certifs',
  templateUrl: './certifs.component.html',
  styleUrl: './certifs.component.css'
})
export class CertifsComponent {

  openNewTab(idx: number): void {

    switch (idx) {
      //ingles avanzado
      case 1:
        window.open('https://www.dropbox.com/scl/fi/w06xff894xwmcpt7lp2jt/Certificado-Brit-nico-Avanzado-Rafael-ontol-Lozano.pdf?rlkey=dehwvc5toq2t6oecrzsn81a70&dl=0', '_blank');
        break;
      //scrum fundamentals
      case 2:
        window.open('https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-RafaelSantiago%C3%91ontolLozano-861174.pdf', '_blank');
        break;
      //ndg linux
      case 3:
        window.open('https://www.dropbox.com/s/5qgislklrt2yhrj/NDG%20Linux%20Unhatc-certificate-Rafael%20Santiago%C3%91ontol%20Lozano-.pdf?dl=0', '_blank');
        break;
      //js michigan
      case 4:
        window.open('https://www.coursera.org/account/accomplishments/verify/BZC8MDUL36E9', '_blank');
        break;
      //ingles intermedio
      case 5:
        window.open('https://www.dropbox.com/s/89oa9k1vrle1ex2/Constancia%20de%20Fase%20Culminada_Intermedio.pdf?dl=0', '_blank');
        break;
      //oracle intro sql
      case 6:
        window.open('https://www.dropbox.com/s/1os0sc7vzjzslzo/Oracle%20Introducci%C3%B3n%20SQL%20-%20Rafael%20Santiago%20%C3%91ontol%20Lozano.pdf?dl=0', '_blank');
        break;
      //ingles basico
      case 7:
        window.open('https://www.dropbox.com/s/rcl0xja7wzjtp0c/Constancia%20de%20Fase%20Culminada_Basico.pdf?dl=0', '_blank');
        break;
      //des app escritorio java
      case 8:
        window.open('https://www.dropbox.com/s/saoysgwdplge920/Desarrollo%20de%20Aplicaciones%20de%20Escritorio%20en%20Java%20-%20Rafael%20Santiago%20%C3%91ontol%20Lozano.pdf?dl=0', '_blank');
        break;
      //program java
      case 9:
        window.open('https://www.dropbox.com/s/ewmohdodhvhwi19/Programaci%C3%B3n%20en%20Java%20-%20Rafael%20Santiago%20%C3%91ontol%20Lozano.pdf?dl=0', '_blank');
        break;


    }

  }

}
