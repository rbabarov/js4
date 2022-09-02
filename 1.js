

function getPasswordChecker(password) {
    let pass = password;
    return function check(users_pass) {
        if (password === users_pass) {
            return true;
        }
        return false;
    }
}

let user_1 = getPasswordChecker(123456);
console.log(user_1("qwerty"));
console.log(user_1(665544));
console.log(user_1(123456));
