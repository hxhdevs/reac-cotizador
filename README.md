# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# instalar node
npm create vite@latest
- despues de esto le damos nombre al proyecto elegimos React y JavaScript
- entramos con cd al directorio 
npm install
# como correr el proyecto
npm run dev
# Instalando Tailwind CSS como desarrollo
npm install -D tailwindcss postcss autoprefixer
- despues tipeamos en terminal
npx tailwindcss init -p
- eso creara dos archivos llamados tailwind.config.cjs y postcss.config.cjs 
- y en tailwind.config.cjs tenemos que escribir para que admita la busqueda de clases de tailwindCSS
- el uso de className es usada por convencion ya que es palabra reservada de JS y puede traer problemas 

# Componentes en React
- Los componentes utilizan la extension .js o jsx. y se utilizand con un import
- se puede pasar informacion de un componente a otro con props
# Props 
- se recomienda usarlo para reutilizacion de codigo 

# Tipear lo siguiente para crear el dist para deploy
npm run build

Quiere ver el deploy checa la siguiente URL
https://hxhdevs-cotizador.netlify.app/
