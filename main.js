const d = new Date();
const hoursNow = d.getHours();
const body = document.body;
const wrapper = document.querySelector('.wrapper')
const coffee = document.getElementById('beanJuice');

// Images

let cup = document.createElement('img');
let decaf = document.createElement('img');
let bed = document.createElement('img');
let kettle = document.createElement('img');

cup.src = './firstcup.svg';
decaf.src = './decaf.svg';
bed.src = './bed.svg';
kettle.src = './kettle.svg';

const loading = document.querySelector('.loader');

const remove = () => {
    loading.style.display = 'none'
    wrapper.style.display = 'flex'
}

window.onload = function() {
    setTimeout(remove, 2500)
    // remove();
}

console.log(d);
console.log(hoursNow);
console.log(coffee);

const coffeeTime = () => {
    if (hoursNow >= 0 && hoursNow < 5 ) {
        body.style.backgroundColor = '#9EA2AA';
        coffee.innerHTML = 'Go to bed!';
        coffee.style.color = '#fcfcfc'
        wrapper.appendChild(bed);
    } else if (hoursNow >= 5 && hoursNow < 11) {
        body.style.backgroundColor = '#ffa69e';
        coffee.innerHTML = 'Rise and shine! Grab a cup!'
        wrapper.appendChild(cup);
    } else if (hoursNow >= 11 && hoursNow < 16) {
        body.style.backgroundColor = '#b8f2e6';
        coffee.innerHTML = 'Not too late to start a pour over!'
        wrapper.appendChild(kettle);
    } else if (hoursNow >= 16 && hoursNow < 23) {
        body.style.backgroundColor = '#aed9e0';
        coffee.innerHTML = 'Maybe stick with decaf?';
        wrapper.appendChild(decaf);
    } else {
        body.style.backgroundColor = '#fcfcfc';
    }
}

coffeeTime();