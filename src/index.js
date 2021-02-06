import { sum } from "./sum";
import style from "./css/index.scss"

console.log('Hello world');
console.log(sum(2,3));

const head = document.getElementById("demo"),
    sumValue = sum(10,5)

head.innerHTML = `10 + 5 = ${sumValue}`;