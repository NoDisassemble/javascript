// API documentation can be found here: https://ip-fast.com/docs/

const ip = document.querySelector(".ip");
const city = document.querySelector(".city");
const country = document.querySelector(".country");

async function getIP() {
    response = await fetch("https://ip-fast.com/api/ip/?format=json&location=True");
    data = await response.json();
    ip.innerHTML = `IP: ${data.ip}`;
    city.innerHTML = `City: ${data.city}`;
    country.innerHTML = `Country: ${data.country}`;
}
getIP();