This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Proyecto de E-Commerce: Tech Shop

Tech Shop es un proyecto de e-commerce implementado usando React js para el front end (interacción con el usuario) y Firebase para acceder a los datos (productos, órdenes, categorías) de la aplicación.

### Instalación

1. Clonar éste repositorio.
2. Usando la terminal, navegar hasta llegar al root de la aplicación y correr `npm -i`
3. Finalizada la instalación, correr `npm start`.
4. El proyecto se podrá acceder desde http://localhost:3000

### Características

* En la ruta base del proyecto `/`, se visualizan un set de productos para realizar alguna compra.
* En la barra de menú, hay un ícono para acceder al carrito, con la ruta `/cart`.
* Se puede visualizar la lista de categorías en la ruta base `/`.
* Al hacer click en algún producto de la lista, se accede al detalle del mismo ( Foto, precio, breve descripción).
* En Firebase se implementaron tres colecciones (items, orders, categories).
* Checkout con los items y sus cantidades, total, y el formulario con la información basica del comprador (nombre, teléfono, email).
* Finalizada la compra, se visualiza el id de la órden de compra.



### Característica adicional

El carrito de compras es persistente porque los cambios se almacenan en el local storage del navegador.



