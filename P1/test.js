function averageNumber(num1, num2){
    return(num1 + num2)/2
}

function result(numberOne , numberTwo) {
    const avg = averageNumber(numberOne , numberTwo);
    const txt = `your average is ${avg}`;
    return txt;
}

console.log(result(10 , 14));