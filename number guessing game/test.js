let ranNumber = Math.floor(Math.random() * 100) + 1;
document.querySelector("#buttonArea").addEventListener('click', () => {
    let userGuess = Number(document.querySelector("#userGuess").value);
    let showResut = document.querySelector('.test');
    if (userGuess && userGuess >= 1) {
        if (userGuess > ranNumber) {
            showResut.innerHTML = "too big";
        } else if (userGuess < ranNumber) {
            showResut.innerHTML = "too short";
        } else {
            document.querySelector('.background').style.backgroundColor = "rgba(66, 226, 66, 0.9)";
            showResut.style.color = 'red';
            document.querySelector("#userGuess").disabled = true;
            showResut.innerHTML = "you win!";
        }
    }
});

