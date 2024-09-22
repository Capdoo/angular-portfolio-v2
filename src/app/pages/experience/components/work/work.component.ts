import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  events: any[];
  events2: any[];

  constructor() {
    this.events = [
      {
        status: 'ZyTrust',
        date: 'abril 2023 - actualidad',
        icon: '../../../../assets/zytrust.jpg',
        color: '#9C27B0',
        lines: [
          'Planificación, Diseño y Desarrollo de proyectos para clientes usando Spring Boot y Angular.',
          'Desarrollo de mejoras para las aplicaciones que usan el servicio core de firma digital y electrónica.',
          'Implementación de proyectos evolutivos para los clientes Compartamos Financiera y Credicorp Capital.',
          'Ejecución de Queries en base de datos Oracle para facturación de los clientes en los procesos de firma.',
          'Elaboración de documentación de los proyectos para la Gerencia de Producto.',
          'Diseño de jasper reports para documentos contractuales digitales de los clientes.',
        ],
        puesto: 'Ingeniero de Software Junior'
      },
      {
        status: 'Gnosis Dev',
        date: 'marzo 2022 - mayo 2022',
        icon: '../../../../assets/gnosis3.png',
        color: '#FF9800',
        lines: [
          'Desarrollo de actividades de investigación relacionadas al machine learning.',
          'Presentación de propuesta de investigación relacionando Fotónica e Inteligencia Artificial.',
          'Implementación de proyecto web con relación a la norma EM-110 de confort térmico y lumínico usando Spring Boot y Angular.',
          'Integración Back-End con base de datos relacional PostgreSQL.',
          'Implementación de la API REST usando Spring Web, Spring MVC, Spring Security e Hibernate.',
        ],
        puesto: 'Practicante en Inteligencia de Negocios y Analítica de Datos'
      },
      {
        status: 'Algorithmics Perú',
        date: 'enero 2022 - mayo 2022',
        icon: '../../../../assets/algorithmics2.jpg',
        color: '#673AB7',
        lines: [
          'Dictado de clases de programación estructurada para niños en edad escolar usando Python.',
          'Explicación de fundamentos de programación como bucles, condicionales y estructura de datos.',
          'Uso de Google Colab para compartir el código desarrollado en clase con los estudiantes.',
          'Registro de rendimiento de cada estudiante y ejecución de refuerzos en las tareas asignadas.',
          'Explicación de conceptos abstractos en pizarras virtuales.',
        ],
        puesto: 'Instructor de Programación'
      },
      {
        status: 'Atix World Systems',
        date: 'octubre 2021 - enero 2022',
        icon: '../../../../assets/atixworld.jpg',
        color: '#607D8B',
        lines: [
          'Desarrollo de proyecto para Proyecto de Ministerio de Trabajo y Promoción del Empleo (MTPE).',
          'Se implementó un sistema de gestión de solicitudes con estados y subida de documentos al servidor.',
          'Desarrollo Back-End usando Spring Boot y modelado de base de datos en Oracle.',
          'Implementación de la API REST usando Spring Web, Spring MVC y Spring Security.',
          'Despliegues a producción de componentes Front-End y Back-End usando WildFly.',
        ],
        puesto: 'Desarrollador Backend'
      }
    ];

    this.events2 = [
      {
        status: 'AIRU',
        date: 'junio 2020 - junio 2021',
        icon: '../../../../assets/airu3.jpg',
        color: '#9C27B0',
        lines: [
          'Desarrollo de clases colaborativas sobre Python y estructura de datos dentro del grupo de investigación.',
          'Elaboración de conferencias sobre la detección del cáncer mediante dispositivos fotónicos.',
          'Consolidación de alianza académica con The Oxford College of Engineering (Bangalore, India).',
          'Gestión y organización de un curso relacionado al aprendizaje automático con el Dr. Narayan K. del SVIT – Instituto de Tecnología Sai Vidya, India para los estudiantes de la facultad.',
        ],
        puesto: 'Miembro de Investigación'
      }
    ];
  }

}
