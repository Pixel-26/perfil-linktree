Aquí tienes el contenido convertido a formato Markdown:

```markdown
# Proyecto 101

### 1. **Creación del Repositorio en GitHub**
Primero, necesitarás un repositorio en GitHub para poder almacenar tu código. Vamos a seguir los siguientes pasos:

1. **Iniciar sesión en GitHub**: Si no tienes cuenta, regístrate en [GitHub](https://github.com).
   
2. **Crear un nuevo repositorio**:
   - Haz clic en el icono de **+** en la esquina superior derecha de la pantalla y selecciona **New repository**.
   - Dale un nombre al repositorio, por ejemplo, `perfil-personal`.
   - Selecciona si quieres que el repositorio sea público o privado.
   - Haz clic en **Create repository**.

### 2. **Clonar el Repositorio**
Una vez creado el repositorio, necesitas clonarlo en tu máquina local para empezar a trabajar en el proyecto.

1. Copia la URL del repositorio de GitHub. Debería verse algo como esto: `https://github.com/tu_usuario/perfil-personal.git`
   
2. En tu terminal, navega hasta el directorio donde quieras guardar el proyecto y usa el siguiente comando para clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/perfil-personal.git
   ```
   
3. Después de clonar el repositorio, navega hasta la carpeta del repositorio:
   ```bash
   cd perfil-personal
   ```

### 3. **Estructura de Archivos**
Una vez que hayas clonado el repositorio, crea la siguiente estructura de archivos en tu directorio local:

```
perfil-personal/
│
├── index.html
├── styles.css
├── app.js
├── img/
│   ├── foto-perfil.png
│   ├── fondo_proyecto.jpg
│   ├── twitter.svg
│   ├── facebook.svg
│   ├── instagram.svg
│   └── github.svg
└── README.md
```

### 4. **Crear los Archivos HTML, CSS y JS**
A continuación, vamos a crear los archivos `index.html`, `styles.css` y `app.js` con el código que proporcionaste.

#### 4.1 **index.html**
Crea el archivo `index.html` y agrega el siguiente código:

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
            <!-- Inserciones desde JavaScript -->
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
            <a href="https://x.com/JRyL_01" class="redes-sociales-icon" target="_blank">
                <img src="img/twitter.svg" alt="icon-twitter">
            </a>
            <a href="https://www.facebook.com/" class="redes-sociales-icon" target="_blank">
                <img src="img/facebook.svg" alt="icon-facebook">
            </a>
            <a href="https://www.instagram.com/jose_ryl/" class="redes-sociales-icon" target="_blank">
                <img src="img/instagram.svg" alt="icon-instagram">
            </a>
            <a href="https://github.com/Pixel-26/reading-notes" class="redes-sociales-icon" target="_blank">
                <img src="img/github.svg" alt="icon-github">
            </a>
        </div>
    </main>
    <script src="app.js"></script>
</body>
</html>
```

#### 4.2 **styles.css**
Crea el archivo `styles.css` y agrega el siguiente código:

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
```

#### 4.3 **app.js**
Crea el archivo `app.js` y agrega el siguiente código:

```javascript
let divDOM =  document.getElementById("info-perfil");
divDOM.innerHTML =
                `<h1>José Romero</h1>
                <p>Desarrollador Software</p>`;

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
```

### 5. **Agregar Archivos de Imagen**
Asegúrate de tener las imágenes mencionadas en tu estructura de directorios (`img/foto-perfil.png`, `img/fondo_proyecto.jpg`, etc.). Puedes descargarlas o agregar imágenes que tú mismo crees o tengas.

### 6. **Commit y Push**
Una vez tengas los archivos creados, haz commit y push para subirlos a GitHub.

```bash
git add .
git commit -m "Primer commit - estructura básica de proyecto"
git push origin main
```

### 7. **Ver el Proyecto**
Una vez que todo esté subido a GitHub, puedes abrir el archivo `index.html` en tu navegador para ver cómo se ve tu página. 

¡Y eso es todo! Ahora tendrás un proyecto funcional con HTML, CSS y JavaScript.
```

