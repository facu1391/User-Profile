# Perfil de Usuario

Este proyecto es una página de perfil de usuario creada con Next.js, React y CSS Modules.

## Características

- **Next.js y React**: Utiliza Next.js 14 para la estructura del proyecto y componentes de React para cada sección de la página.
- **CSS Modules**: Manejo de estilos con CSS Modules para un mejor aislamiento y modularidad.
- **Formulario de Contacto**: Formulario con campos para nombre, email y mensaje, con validación básica y mensaje de éxito al enviar.
- **Responsivo**: Diseño responsivo que se adapta a diferentes tamaños de pantalla.
- **Animaciones**: Transiciones suaves para mejorar la experiencia del usuario.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/user-profile.git
   cd user-profile
   npm install
   ```

2. Ejecuta el proyecto en modo desarrollo: 
    ``` npm run dev ```

3. Abre http://localhost:3000 para ver el proyecto en tu navegador.

## Deploy 
El proyecto está desplegado en Vercel. Puedes ver la versión en vivo en el siguiente enlace: https://user-profile-steel.vercel.app/

## Estructura del Proyecto
* /components: Contiene los componentes React para cada sección de la página (Header, About, Interests, ContactForm).
* /pages: Contiene las páginas del proyecto Next.js, incluyendo la página principal index.js.
* /styles: Contiene los archivos CSS globales y módulos CSS. 

## Ejecutar Pruebas
El proyecto incluye pruebas básicas utilizando Jest y Testing Library.

1. Instala las dependencias de desarrollo necesarias:
 ``` npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom @testing-library/dom @testing-library/user-event jest-environment-jsdom``` 

2. Configura Jest añadiendo un archivo jest.config.js en la raíz del proyecto:
```
// jest.config.js
module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

 ```

 3. Añade un archivo jest.setup.js para extender Jest con Testing Library: 
 ```
// jest.setup.js
import '@testing-library/jest-dom/extend-expect';
 ```

4. Ejecuta las pruebas: 
``` npm test ```

## Contribuir
Si deseas contribuir a este proyecto, por favor, abre un issue o envía un pull request.





