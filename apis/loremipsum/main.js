// consts
const results = document.querySelector(".output");
const proxy = "https://api.codetabs.com/v1/proxy?quest=";
const api = "https://loripsum.net/api/";
const url = proxy + api;



const loading = document.querySelector(".loading");

let btnAdd = document.getElementById("add");
let btnSub = document.getElementById("subtract");

// Show loading spinner
function showLoading() {
    if (loading.style.display === "none") {
        loading.style.display = "block";
    } else {
        loading.style.display = "block";
    }
}

// Get input
function getInput() {
    input = document.getElementById("no-of-para");
    console.log(input.value);
    getLorem();
}
getInput();

btnAdd.addEventListener("click", () => {
    let input = document.getElementById("no-of-para");
    input.value = parseInt(input.value) + 1
    console.log(input.value);
    getLorem();
});

btnSub.addEventListener("click", () => {
    let input = document.getElementById("no-of-para");
    input.value = parseInt(input.value) - 1
    if (input.value <= 0) {
        input.value = 0;
    }
    getLorem();
});

// Get Lorem Ipsum
async function getLorem() {
    if (input.value <= 0) {
        results.innerHTML = "";
    } else {
        showLoading();
        response = await fetch(url + input.value);
        data = await response.text();
        results.innerHTML = data;
        console.log(url + input.value)
    }
}
