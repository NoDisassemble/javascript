// api   => https://v2.jokeapi.dev/
const api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=twopart";

// functions
const joke = document.querySelector(".joke");
const setup = document.querySelector(".setup");
const delivery = document.querySelector(".delivery");
const btn = document.querySelector(".btn");

// Show loading spinner
function showLoading() {
    loading = document.querySelector(".loading");
    // document.querySelector(".joke").innerHTML = "";
    document.querySelector(".setup").innerHTML = "";
    document.querySelector(".delivery").innerHTML = "";
    if (loading.style.display === "none") {
        loading.style.display = "block";
    } else {
        loading.style.display = "none";
    }
}
showLoading();

// main
async function getJoke() {
    showLoading();
    response = await fetch(api);
    data = await response.json();
    console.log(data);
    showLoading();
    // joke.innerHTML = data.joke;
    setup.innerHTML = data.setup;
    delivery.innerHTML = data.delivery;
}

btn.addEventListener('click', getJoke)

getJoke();