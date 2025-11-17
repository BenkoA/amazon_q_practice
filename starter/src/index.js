import {checkPassword, checkPasswordAndThrowReason} from "./PasswordChecker.js"

const result = checkPassword("12345d678");
console.log(result);

const result2 = checkPasswordAndThrowReason("12345d678");
console.log(result2);
