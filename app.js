// Variables
let cookies = localStorage.getItem('cookieCount') || 0;
let totalIncrement = 1;

//DOM
const numberOfCookiesElement = document.getElementById('numberOfCookies');
const cookiesPerSecondElement = document.getElementById('cookiesPerSecond');

// setInterval
setInterval(function () {
    cookies += totalIncrement;
    numberOfCookiesElement.textContent = cookies;
    localStorage.setItem('cookieCount', cookies);
    cookiesPerSecondElement.textContent = totalIncrement + ' cps';
    console.log("🍪", cookies);
}, 1000);

// Upgrades
const upgrades = [
    { name: 'Grandma', cost: 10, increment: 1 },
    { name: 'Oven', cost: 100, increment: 10 },
    { name: 'Factory', cost: 1000, increment: 100 },
    { name: 'Mine', cost: 10000, increment: 1000 },
    { name: 'Bank', cost: 100000, increment: 10000 }
];

// Events for upgrades
for (let i = 0; i < upgrades.length; i++) {
    const upgradeButton = document.getElementById(`buy${upgrades[i].name}`);
    upgradeButton.addEventListener('click', function () {
        if (cookies >= upgrades[i].cost) {
            cookies -= upgrades[i].cost;
            numberOfCookiesElement.textContent = cookies;
            totalIncrement += upgrades[i].increment;
            cookiesPerSecondElement.textContent = totalIncrement + ' cps';
        } else {
            alert("Not enough cookies to buy this upgrade!");
        }
    });
}

// Reset buttom
resetButton.addEventListener('click', function () {
    cookies = 0;
    totalIncrement = 1;
    numberOfCookiesElement.textContent = cookies;
    localStorage.setItem('cookieCount', cookies);
});

// "thebutton" button
theButton.addEventListener('click', function () {
    cookies += 1;
    numberOfCookiesElement.textContent = cookies;
    localStorage.setItem('cookieCount', cookies);
});

// Greeting alert
window.addEventListener('load', function () {
    alert("Hi there! Cook as many 🍪 as you can and make your grandma proud.");
});