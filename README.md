Summary
El objetivo de este repositorio se centró en el proceso y puesta en práctica del aprendizaje de TypeScript con Express.js y la conexión con una base de datos gestionada por prisma. Esto mediante la implementación del método GET y POST.

Background
Este repositorio se enfocó en la aplicación práctica del aprendizaje de TypeScript junto con Express.js, destacando la conexión con una base de datos gestionada por Prisma. El objetivo principal fue la implementación de los métodos GET y POST en el desarrollo web. Este enfoque buscaba proporcionar experiencia en la creación de aplicaciones web utilizando TypeScript con Express.js como framework principal, por lo que fue necesario familiarizarse previamente con el lenguaje y el framework, además de integrar la persistencia de datos a través de Prisma para la gestión eficiente de la base de datos. La implementación de los métodos GET y POST se considera esencial para la interacción cliente-servidor, permitiendo la recuperación y almacenamiento de datos de manera efectiva. En resumen, el repositorio se centró en la práctica de TypeScript, Express.js y Prisma.

Problem
Surge con la necesidad de resolver el ticket 'Verify endpoint' asignado, al no tener los conocimientos necesarios para realizarlo se optó por el aprendizaje mínimo de los conocimientos necesarios para realizar la tarea asignada. De modo que solo se realizó la conexión con la base de datos por el método GET y POST.

Design
La arquitectura del sistema se basa en el patrón "Vista-Controlador" (MVC), proporcionando una estructura organizada para el desarrollo y mantenimiento del código. Se emplearon middlewares para la manipulación de las solicitudes antes de llegar a las funciones controladoras, permitiendo validaciones, autenticación u otras acciones previas al procesamiento principal.
    Rutas y Endpoints:
    Las rutas estarán definidas en el controlador y se mapearán a los endpoints correspondientes.
    Se implementaron rutas para los métodos HTTP, como GET y POST, conectando las solicitudes del cliente con las funciones controladoras adecuada

Ejecución:

Para iniciar el servidor, ejecutar:
    npm run dev

El codigo usa el puerto 5000 asignado, pero puede modificarse segun las necesidades:

Se puede hacer una solicitud mediante herramientas como POSTMAN o CURL. En el caso de CURL se hace una solicitud de la forma:
    curl http://localhost:5000/api/user

Lo que regresará la lista de usuarios, name y email correspondientes, alojada en la base de datos.