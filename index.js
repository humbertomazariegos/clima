var btnClimaHoy = document.getElementById("revisar-hoy");
var btnClimaHoyCargando = document.getElementById("revisar-hoy-cargando");
var contenidoRevisarHoy = document.getElementById("contenido-revisar-hoy");
var hoyMananaText = document.getElementById("hoy-manana-text");
var hoyTardeText = document.getElementById("hoy-tarde-text");
var hoyNocheText = document.getElementById("hoy-noche-text");
var hoyMananaImg = document.getElementById("hoy-manana-img");
var hoyTardeImg = document.getElementById("hoy-tarde-img");
var hoyNocheImg = document.getElementById("hoy-noche-img");

var btnRevisarFecha = document.getElementById("revisar-fecha");
var btnRevisarFechaCargando = document.getElementById("revisar-fecha-cargando");
var fechaPintada = document.getElementById("fecha-pintada");
var fechaImagen = document.getElementById("fecha-imagen");
var fechaTemperatura = document.getElementById("fecha-temperatura");
var inputFecha = document.getElementById("fecha");
var contenidoFecha = document.getElementById("contenido-fecha");

btnClimaHoy.addEventListener('click', revHoy)
btnRevisarFecha.addEventListener('click', revFech)

async function revisarFecha(){
    var climaFecha = [];
    btnRevisarFecha.classList.add('d-none')
    btnRevisarFechaCargando.classList.remove('d-none')
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            climaFecha =[
                {
                    'temperatura' : Math.floor(Math.random() * (30 - 5)) + 5,
                    'clima': Math.floor(Math.random() * (3 - 1)) + 1,
                }];
            resolve(climaFecha);
        }, 2000);
    })
}

async function revFech(){
    if(inputFecha.value == '' || inputFecha.value == null || inputFecha.value == undefined){
        alert("Debe seleccionar una fecha");
    }else{
        await revisarFecha().
        then(
            resultado=>{
                // ocultar y mostrar botones, textos e imagenes
                btnRevisarFecha.classList.add('d-block')
                btnRevisarFechaCargando.classList.add('d-none')
                btnRevisarFecha.classList.remove('d-none')

                fechaTemperatura.innerHTML = resultado[0].temperatura;
                fechaPintada.innerHTML = inputFecha.value;
                fechaImagen.src = './assets/img/' + estadoClima(resultado[0].clima) + '.png';

                contenidoFecha.classList.remove('d-none')
                function estadoClima(e){
                    switch (e){
                    case 1:
                        return 'despejado';
                    case 2:
                        return 'nublado';
                    default:
                        return 'lluvioso'

                    } 
                }
                // console.log(resultado)
            }
        );
        alert("El clima de la fecha se ha actualizado ");
    }
}

async function revHoy(){
    await revisarHoy().
        then(
            resultado=>{
                // ocultar y mostrar botones, textos e imagenes
                btnClimaHoy.classList.add('d-block')
                btnClimaHoyCargando.classList.add('d-none')
                btnClimaHoy.classList.remove('d-none')

                hoyMananaText.innerHTML = resultado[0].temperatura;
                hoyTardeText.innerHTML = resultado[1].temperatura;
                hoyNocheText.innerHTML = resultado[2].temperatura;

                hoyMananaImg.src = './assets/img/' + estadoClima(resultado[0].clima) + '.png';
                hoyTardeImg.src = './assets/img/' + estadoClima(resultado[1].clima) + '.png';
                hoyNocheImg.src = './assets/img/' + estadoClima(resultado[2].clima) + '.png';

                contenidoRevisarHoy.classList.remove('d-none')
                function estadoClima(e){
                    switch (e){
                    case 1:
                        return 'despejado';
                    case 2:
                        return 'nublado';
                    default:
                        return 'lluvioso'

                    } 
                }
                // console.log(resultado)
            }
        );
    alert("El clima del día se ha actualizado ");
}

async function revisarHoy(){
    var climaHoy = [];
    btnClimaHoy.classList.add('d-none')
    btnClimaHoyCargando.classList.remove('d-none')
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            climaHoy =[
                {
                    'temperatura' : Math.floor(Math.random() * (30 - 5)) + 5,
                    'clima': Math.floor(Math.random() * (3 - 1)) + 1,
                },
                {
                    'temperatura' : Math.floor(Math.random() * (30 - 5)) + 5,
                    'clima': Math.floor(Math.random() * (3 - 1)) + 1,
                },
                {
                    'temperatura' : Math.floor(Math.random() * (30 - 5)) + 5,
                    'clima': Math.floor(Math.random() * (3 - 1)) + 1,
                }];

            resolve(climaHoy);
        }, 2000);
    })
}