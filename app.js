//Задание1

let count = +prompt('Введите кол-во бананов')

for(let i = 1; i <= count; i++){
    if(i == 1) {
        console.log(i + 'banana');
    }else {
        console.log(i + 'bananas');
    }
}

// Задание2

let tally = +prompt('Введите сколько раз должен сработать цикл')


let sum = 0;

for(let i = 1; i <= tally; i++){
    if(i % 2 == 1) {
        sum += i
    }
}

console.log('Сумма четных чисел' + sum);

//Задание3

let num = +prompt('Введите число')
let stepen = +prompt('Введите число')

let answer = 1;

for(let i = 1; i <= stepen;i++) {
     answer = answer * num
 }

 console.log(answer);

