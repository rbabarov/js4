let inp = require('readline').createInterface(process.stdin, process.stdout);
let num = Math.floor(Math.random() * 100);
let count = 0;
console.log("Угадай число за наименьшее количество попыток. Для выхода из игры набери 'q'.");
function circle() {
    inp.question('Вести число от 0 до 99: ', (entr) => {
        count += 1;
        if (entr === "q") {
            inp.close();
            return
        } else if (isNaN(entr) || entr < 0 || entr > 99) {
            console.log("Введено некорректное значение.");
        } else if (+entr < num) {
            console.log("Ваше число меньше, чем загадано. Играем дальше!");
        } else if (+entr > num) {
            console.log("Ваше число больше, чем загадано.");
        } else if (+entr === num) {
            console.log(`Вы угадали! Сделано попыток - ${count}`);
            inp.close();
            return
        }
        circle();
    })
}

circle();

