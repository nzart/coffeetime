const d = new Date();
const hoursNow = d.getHours();
const body = document.body;
const coffee = document.getElementById('beanJuice');

console.log(d);
console.log(hoursNow);
console.log(coffee);

const coffeeTime = () => {
    if (hoursNow >= 0 && hoursNow < 5 ) {
        body.style.backgroundColor = '#050505';
        coffee.innerHTML = 'Go to bed!';
    } else if (hoursNow >= 5 && hoursNow < 11) {
        body.style.backgroundColor = '#37c5cc';
        coffee.innerHTML = 'Rise and shine! Grab a cup!'
    } else if (hoursNow >= 11 && hoursNow < 16) {
        body.style.backgroundColor = '#d95a3b';
        coffee.innerHTML = 'Not too late to start a pour over!'
    } else if (hoursNow >= 16 && hoursNow < 23) {
        body.style.backgroundColor = '#7f3bd9';
        coffee.innerHTML = 'Maybe stick with decaf?';
    } else {
        body.style.backgroundColor = '#fcfcfc';
    }
}

coffeeTime();