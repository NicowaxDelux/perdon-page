const btnSi = document.getElementById('btn-Si');
const btnNo = document.getElementById('btn-No');
const respuesta = document.getElementById('respuesta');
const imagen = document.getElementById('imagen');

let noClickCount = 0;
let scale = 1;

const mensajesNo = [
    ".",
    "¿Por que no? 🥺",
    "¿Pero ya no me quieres?",
    "Yo se que sii, ¿cierto? 😢",
    "Rayos, pero no me rendire,aun asi digas No de nuevo",
    "Lo tomare como un si, jajaja ¿Vamos a cine? 😊"
];

btnSi.addEventListener('click', () => {
    respuesta.textContent ="¡SIII!, sabia que dirias que si mi amor,\
    ¿entonces vamos a cine? jaja."
    imagen.style.display = 'block';     
});

btnNo.addEventListener('click', () =>{

    noClickCount++;
    if(noClickCount < 5){
        scale += 0.4;
        btnSi.style.transform = `scale(${scale})`;
        respuesta.textContent = mensajesNo[noClickCount];
    } else {
        respuesta.textContent = mensajesNo[mensajesNo.length -1];
        imagen.style.display = 'block';
    }
});