let count = 0;
let currentNumber = document.getElementById('currentNumber');

function increment() {
    if (count <10) {document.getElementById('currentNumber').style.color = 'black'; count++; currentNumber.innerHTML = count;}
    else { alert("valor maximmo de 10");}
}
function decrement() {
    if (count >-10) {count--; currentNumber.innerHTML = count;}
    else {alert("Valor maximo de -10");}
    if (count <0) {document.getElementById('currentNumber').style.color = 'red';} 
}


function darkmode()  {
    
}