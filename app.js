
let divDOM =  document.getElementById("info-perfil");
divDOM.innerHTML=
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

