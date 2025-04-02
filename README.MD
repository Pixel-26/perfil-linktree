# Proyecto 101: Desarrollo de Perfil Personal Web

## Contenido
- [Introducción](#introducción)
- [Requisitos Previos](#requisitos-previos)
- [Configuración del Entorno](#configuración-del-entorno)
  - [Creación del Repositorio en GitHub](#creación-del-repositorio-en-github)
  - [Clonación del Repositorio Local](#clonación-del-repositorio-local)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Desarrollo del Sitio](#desarrollo-del-sitio)
  - [HTML (index.html)](#html-indexhtml)
  - [CSS (styles.css)](#css-stylescss)
  - [JavaScript (app.js)](#javascript-appjs)
- [Personalización del Proyecto](#personalización-del-proyecto)
- [Despliegue](#despliegue)
- [Solución de Problemas Comunes](#solución-de-problemas-comunes)
- [Recursos Adicionales](#recursos-adicionales)

## Introducción

Este proyecto te guiará en la creación de una página web de perfil personal responsiva utilizando HTML, CSS y JavaScript. Al finalizar, tendrás un sitio web profesional que podrás personalizar y utilizar como carta de presentación en línea.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- Git ([descargar aquí](https://git-scm.com/downloads))
- Un editor de código (recomendamos [Visual Studio Code](https://code.visualstudio.com/))
- Navegador web moderno (Chrome, Firefox, etc.)
- Cuenta en GitHub ([crear cuenta](https://github.com/join))

## Configuración del Entorno

### Creación del Repositorio en GitHub

1. **Inicia sesión en GitHub**: Accede a tu cuenta en [GitHub](https://github.com).
   
2. **Crea un nuevo repositorio**:
   - Haz clic en el icono de **+** en la esquina superior derecha y selecciona **New repository**.
   - Nombra tu repositorio (ej. `perfil-personal`).
   - Elige la visibilidad (público o privado).
   - Marca la opción "Initialize this repository with a README" para crear un README inicial.
   - Haz clic en **Create repository**.

   ![Ejemplo creación repositorio](https://placeholder-image.com/github-repo-creation.png)

### Clonación del Repositorio Local

1. En tu repositorio de GitHub, haz clic en el botón verde **Code** y copia la URL.
   
2. Abre tu terminal y navega al directorio donde deseas guardar el proyecto:
   ```bash
   # Navega a tu directorio de trabajo
   cd ruta/a/tu/directorio

   # Clona el repositorio
   git clone https://github.com/tu_usuario/perfil-personal.git

   # Entra al directorio del proyecto
   cd perfil-personal
   ```

## Estructura del Proyecto

Crea la siguiente estructura de archivos en tu directorio local:

```
perfil-personal/
│
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS 
├── app.js              # Lógica JavaScript
├── img/                # Directorio para imágenes
│   ├── foto-perfil.png # Tu foto de perfil
│   ├── fondo_proyecto.jpg # Imagen de fondo
│   ├── twitter.svg     # Iconos de redes sociales
│   ├── facebook.svg
│   ├── instagram.svg
│   └── github.svg
└── README.md           # Documentación del proyecto
```

## Desarrollo del Sitio

### HTML (index.html)

El archivo HTML define la estructura de la página web:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil Personal</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nova+Round&display=swap" rel="stylesheet">
</head>
<body>
    <main>
        <div class="contenedor-perfil">
            <img class="imagen-perfil" src="img/foto-perfil.png" alt="Foto de perfil">
        </div>
        <div class="info-perfil" id="info-perfil">
            <!-- Contenido insertado dinámicamente desde JavaScript -->
        </div>
        <div class="contenedor-btn">
            <div class="btn-pagina">
                <div class="btn-sombra"></div>
                <a href="#" class="btn-link" target="_blank">Proyectos</a>
            </div>
            <div class="btn-pagina">
                <div class="btn-sombra"></div>
                <a href="#" class="btn-link" target="_blank">Portafolio </a>
            </div>
            <div class="btn-pagina">
                <div class="btn-sombra"></div>
                <a href="#" class="btn-link" target="_blank">Contactos</a>
            </div>
        </div>
        <div class="redes-sociales">
            <a href="https://x.com/TuUsuario" class="redes-sociales-icon" target="_blank">
                <img src="img/twitter.svg" alt="icon-twitter">
            </a>
            <a href="https://www.facebook.com/TuUsuario" class="redes-sociales-icon" target="_blank">
                <img src="img/facebook.svg" alt="icon-facebook">
            </a>
            <a href="https://www.instagram.com/TuUsuario" class="redes-sociales-icon" target="_blank">
                <img src="img/instagram.svg" alt="icon-instagram">
            </a>
            <a href="https://github.com/TuUsuario" class="redes-sociales-icon" target="_blank">
                <img src="img/github.svg" alt="icon-github">
            </a>
        </div>
    </main>
    <script src="app.js"></script>
</body>
</html>
```

### CSS (styles.css)

El archivo CSS contiene los estilos que definen la apariencia visual:

```css
* {
    padding: 0;
    margin: 0;
}
body {
    font-family: "Nova Round", system-ui;
    color: #fbffff;
    background-color: #F3F3F1;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
main {
    background: url(img/fondo_proyecto.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    padding: 20px;
    width: 300px;
    height: 600px;
    box-shadow: 0 6px 22px rgba(0, 0, 0, 0.7);
}
.contenedor-perfil {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
.imagen-perfil {
    width: 70px;
    border-radius: 50%;
    margin-top: 40px;
}
.info-perfil {
    text-align: center;
    margin-bottom: 32px;
}
.contenedor-btn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 40px;
}
.btn-pagina {
    position: relative;
    width: 100%;
}
.btn-link {
    text-decoration: none;
}
.btn-sombra {
    position: absolute;
    top: 7px;
    left: 7.5px;
    width: 300px;
    height: 56px;
    background-color: white;
    border-radius: 8px;
    z-index: 1;
}
.btn-link {
    position: relative;
    display: block;
    background-color: #C94C44;
    color: #ededed;
    text-decoration: none;
    padding: 14px 14px 22px 14px;
    border-radius: 6px;
    border: 2px solid #fbffff;
    text-align: center;
    font-weight: 500;
    font-size: 13px;
    z-index: 2;
    transition: background-color 0.3s;
}
.btn-link:hover {
    transform: translateX(+3px) translateY(+3px);
    background-color: #E55C5C;
}
.redes-sociales {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 150px;
}
.redes-sociales-icon {
    text-decoration: none;
    transition: transform 0.3s;
}
.redes-sociales-icon:hover {
    transform: scale(1.2);
}
.redes-sociales-icon img {
    width: 30px;
}

/* Reglas de media queries para responsividad */
@media (max-width: 768px) {
    main {
        width: 280px;
        height: 580px;
    }
    
    .redes-sociales {
        gap: 120px;
    }
}
```

### JavaScript (app.js)

El archivo JavaScript añade interactividad y contenido dinámico a la página:

```javascript
// Insertar información del perfil dinámicamente
let divDOM = document.getElementById("info-perfil");
divDOM.innerHTML =
                `<h1>Tu Nombre</h1>
                <p>Tu Profesión</p>`;

// Modificar el estilo del <h1>
let h1 = divDOM.querySelector("h1"); 
h1.style.fontSize = "20px";  
h1.style.fontStyle = 'italic'; 
h1.style.fontWeight = '600'; 

// Modificar el estilo del <p>
let p = divDOM.querySelector("p");
p.style.fontSize = "14px";  
p.style.marginTop = '10px';   
p.style.fontWeight = '400'; 

// Ejemplo de validación de enlaces
document.querySelectorAll('.btn-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Si el enlace no tiene href específico, prevenir navegación
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            console.log('Enlace aún no configurado');
            // Opcional: Mostrar alerta al usuario
            alert('¡Esta sección está en desarrollo!');
        }
    });
});
```

## Personalización del Proyecto

Para personalizar tu perfil:

1. **Foto de perfil**: Reemplaza `img/foto-perfil.png` con tu imagen personal.
2. **Imagen de fondo**: Cambia `img/fondo_proyecto.jpg` por un fondo de tu elección.
3. **Información personal**: Modifica el contenido en `app.js` con tu nombre y profesión.
4. **Redes sociales**: Actualiza los enlaces en `index.html` con tus perfiles.
5. **Esquema de colores**: Personaliza los colores en `styles.css` según tus preferencias.

## Despliegue

Para subir tu proyecto a GitHub:

```bash
# Añadir todos los archivos al staging
git add .

# Crear un commit con descripción
git commit -m "Implementación inicial del perfil personal"

# Subir los cambios a GitHub
git push origin main
```

Para publicar tu sitio web utilizando GitHub Pages:
1. Ve a la configuración de tu repositorio
2. Desplázate hasta la sección "GitHub Pages"
3. En "Source", selecciona la rama "main"
4. Guarda los cambios y espera a que se genere el enlace a tu sitio

## Solución de Problemas Comunes

### Las imágenes no se muestran
- Verifica que las rutas de las imágenes sean correctas
- Confirma que los archivos están en la carpeta `img/`
- Asegúrate de haber subido las imágenes al repositorio

### Los estilos CSS no se aplican
- Revisa que el archivo `styles.css` esté correctamente enlazado en el HTML
- Verifica que no haya errores de sintaxis en tu CSS

### El JavaScript no funciona
- Abre la consola del navegador para ver posibles errores
- Verifica que el archivo `app.js` esté correctamente enlazado al final del HTML

## Recursos Adicionales

- [Documentación de HTML (MDN)](https://developer.mozilla.org/es/docs/Web/HTML)
- [Guía de CSS (MDN)](https://developer.mozilla.org/es/docs/Web/CSS)
- [Tutorial de JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [Documentación de Git](https://git-scm.com/doc)
- [GitHub Pages](https://pages.github.com/)