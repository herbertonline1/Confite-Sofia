// Contagem regressiva
var dataFutura = new Date("July 26,2024 08:00").getTime();

var dias,horas,minutos,segundos;

function setValores (e){
    return document.getElementById()
}

setInterval(function(){
    var dataAtual = new Date().getTime();

    var segundosTotal = (dataFutura - dataAtual)/1000;

    dias = parseInt(segundosTotal/86400);
    segundosTotal = segundosTotal%86400;

    horas = parseInt(segundosTotal/3600);
    segundosTotal = segundosTotal%3600;

    minutos = parseInt(segundosTotal/60);
   segundos = parseInt(segundosTotal%60);

   document.getElementById("dias").innerHTML = dias;
   document.getElementById("horas").innerHTML = horas;
   document.getElementById("minutos").innerHTML = minutos;
   document.getElementById("segundos").innerHTML = segundos;
},1000)







// Simulação de dados de convidados confirmados
let guestsConfirmed = [];

// Função para adicionar convidado à lista de confirmados
function addConfirmedGuest(name) {
    guestsConfirmed.push(name);
}

// Função para exibir os convidados confirmados
function displayConfirmedGuests() {
    let confirmedGuestsList = document.getElementById("confirmedGuests");
    confirmedGuestsList.innerHTML = "";
    guestsConfirmed.forEach(guest => {
        let listItem = document.createElement("li");
        listItem.textContent = guest;
        confirmedGuestsList.appendChild(listItem);
    });
}

// Event listener para o botão de confirmação
document.getElementById("confirmButton").addEventListener("click", function() {
    let guestName = prompt("Digite seu nome para confirmar presença:");
    if (guestName) {
        addConfirmedGuest(guestName);
        document.getElementById("confirmMessage").textContent = `Obrigado por confirmar, ${guestName}!`;
        displayConfirmedGuests();
    }
});


// MENU HAMBURGUER
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  