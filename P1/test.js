let ranNumber = Math.floor(Math.random() * 100);
document.querySelector("#buttonArea").addEventListener('click', () => {
    let userGuess = Number(document.querySelector("#userGuess").value);
    let showResut = document.querySelector('.test');
    if (userGuess && userGuess >= 1) {
        if (userGuess > ranNumber) {
            showResut.innerHTML = "too big";
        } else if (userGuess < ranNumber) {
            showResut.innerHTML = "too short";
        } else {
            showResut.innerHTML = "you win!";
            alert("you win!");
        }
    }
});

