
let inp = require('readline').createInterface(process.stdin, process.stdout);
const question = require('util').promisify(inp.question).bind(inp);
let num = Math.floor(Math.random() * 100);
let count = 1;

async function game() {
    while (true) {
        let answer = await question('Вести число от 0 до 99: ');
        let res = await calc(answer);
        if (res == "stop") {
            break
        } else {
            console.log(res)
        }
    }
}
game();


function calc(answer) {
    return new Promise((resolve, reject) => {
        if (answer === "q") {
            inp.close();
            resolve("stop")
        } else if (isNaN(answer) || answer < 0 || answer > 99) {
            resolve("Введено некорректное значение.")
        } else if (+answer < num) {
            count += 1;
            resolve("Ваше число меньше, чем загадано. Играем дальше!")
        } else if (+answer > num) {
            count += 1;
            resolve("Ваше число больше, чем загадано.")
        } else if (+answer === num) {
            inp.close();
            console.log(`Вы угадали! Сделано попыток - ${count}`);
            resolve("stop")
        }
    })
}

