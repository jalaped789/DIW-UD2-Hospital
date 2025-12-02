# SDIW-UD2-Hospital

## Author: Juan Carlos Alarcón Pedraza, 2DAW Tarde

## Título del Proyecto
Sistema web para la gestión de citas, prescripciones y atención médica, con módulos de prescripciones, unidad de enfermería y urgencias.

## Estructura del Proyecto

DIW-UD2-Hospital/
│
├── index.html # Login
├── main.js # JS global si aplica
├── styles/
│ ├── guide.css # Guía de estilos general
│ ├── css/
│ │ └── prescripciones/ # CSS puro
│ │ ├── lista-citas.css
│ │ ├── detalle-cita.css
│ │ ├── historia-clinica.css
│ │ └── busqueda-pacientes.css
│ ├── sass/
│ │ └── enfermeria/ # Sass
│ │ ├── mapa-camas.scss
│ │ └── hoja-medicacion.scss
│ └── tailwind/
│ └── urgencias/ # Tailwind
│ ├── registro-urgencias.css
│ └── triaje.css
│
├── js/
│ ├── prescripciones.js
│ ├── enfermeria.js
│ └── urgencias.js
│
├── pages/
│ ├── guia-estilos.html
│ ├── prescripciones/
│ │ ├── lista-citas.html
│ │ ├── detalle-cita.html
│ │ ├── historia-clinica.html
│ │ └── busqueda-pacientes.html
│ ├── enfermeria/
│ │ ├── mapa-camas.html
│ │ └── hoja-medicacion.html
│ └── urgencias/
│ ├── registro-urgencias.html
│ └── triaje.html
│
├── assets/
│ ├── images/
│ ├── icons/
│ └── fonts/
│
├── tailwind.config.js # Configuración de Tailwind
├── package.json # Node.js para Tailwind/Sass
└── README.md