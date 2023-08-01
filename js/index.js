let ramdon = Math.random()*10;
let number = Math.round(ramdon);
let attempts = 0;

function riddleNumber() {
    let add = document.getElementById('riddle').value;
    let comments = document.getElementById('comments');
    let intentos = document.getElementById('attempts');
    attempts += 1;

    if (add == '' ||add < 0 || add > 10 || isNaN(add)){
        comments.textContent = 'Por favor Ingrese un Números Validos que este entre el 1 al 20';
        return
    }

    if (add == number){
        comments.textContent = 'Felicidades Ganaste';
        intentos.textContent = 'Total de Intentos: '+attempts;
        comments.style.color = 'green';
        intentos.style.color = 'green';
    } else if (add > number) {
        comments.textContent = 'Estas por Encima del Número Ganador';
        comments.style.color = 'red';
    } else {
        comments.textContent = 'Estas por Debajo del Número Ganador';
        comments.style.color = 'red';
    }
}

function reset(){
    location.reload();
}
