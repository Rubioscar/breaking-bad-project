Versión de node utilizada 12.16.1/ Versión de npm 6.13.4 Para iniciar la aplicación dentro de la carpeta breaking-bad-app usar los siguientes comando en el orden indicado:

npm i
npm start
npm test
Las rutas de la web son /list y /details/:idCharacter

Los componentes de la aplicacion se encuentran todos dentro de la carpeta de common, en la carpeta pages se encuentran los principales componentes ErrorPage, ListPage(página de listado), DetailsPage(página de detalles). Los componentes de los que estan formados estas páginas se encuentran dentro de la carpeta components p.e: El componente paginación, breadCrumbs y el resto de componentes.

En este caso la carpeta con el css y test se encuentra en la carpeta scss y test sucesivamente. He utilizado redux para el loading y breadcrumbs, y context para las notificaciones, aunque podría haber usado context para todo y evitar usar redux, pero he considero buena idea incluirlo. El enrutado esta realizado por react-router
