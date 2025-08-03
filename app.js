// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


var listaAmigos = [];

function agregarAmigo(){


var texto = document.querySelector('#amigo').value ;
if(texto === ''){
    alert('por favor, ingrese un nombre valido')
}else{
listaAmigos.push(document.querySelector('#amigo').value);
console.log(listaAmigos)
vaciarCampo('#amigo','')
mostrarListado()
}


}

function sortearAmigo(){
   var numeroRandom = Math.floor(Math.random() * listaAmigos.length )
  document.querySelector('#listaAmigos').innerHTML  = '';

  const lista  = document.querySelector('#resultado')
  lista.innerHTML = ''


  const h2 = document.createElement('h2')
  h2.textContent = 'El Amigo Secreto sorteado: ' + listaAmigos[numeroRandom]
  lista.appendChild(h2)

listaAmigos = []
mostrarListado()

}




function vaciarCampo(nombreCampo, texto){
    document.querySelector(nombreCampo).value = texto
}

function mostrarListado() {
const lista = document.querySelector('#listaAmigos');
lista.innerHTML = '';



listaAmigos.forEach(element => {
   const li = document.createElement('li');
   li.textContent = element;
   lista.appendChild(li)

    
});


}


/*

    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
*/

