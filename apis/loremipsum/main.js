// consts for urls
const results = document.querySelector(".output");
const proxy = "https://api.codetabs.com/v1/proxy?quest=";
const api = "https://loripsum.net/api/";
const url = proxy + api;

// consts for paragraph length
const short = document.getElementById("para-len-short");
const medium = document.getElementById("para-len-medium");
const long = document.getElementById("para-len-long");

let paraLen = "/medium";

// const for options  | Example: https://loripsum.net/api/5/medium/link/ul/ol/dl/bq/code/headers/decorate/allcaps
const links = "link"; // Adds links
const ul = "ul"; // Adds unordered lists
const ol = "ol"; // Adds numbered lists
const dl = "dl"; // Adds description lists
const bq = "bq"; // Adds blockquotes
const pre = "code"; // Adds pre tags
const headings = "headers"; // Adds headers h1 - h6
const decorate = "decorate"; // Adds bold and italic text
const allcaps = "allcaps"; // Adds ALL CAPS

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

// Input for number of lorem ipsum to generate via number entry
function getInput() {
    input = document.getElementById("no-of-para");
    console.log(input.value);
    getLorem();
}
getInput();

// Number of lorem Ipsum paragraphs to generate via button click
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

// length of lorum Ipsum, Short, Med, Long
short.addEventListener("change", () => {
    if (short.checked) {
        paraLen = "/short";
    }
    getLorem();
})
medium.addEventListener("change", () => {
    if (medium.checked) {
        paraLen = "/medium";
    }
    getLorem();
})
long.addEventListener("change", () => {
    if (long.checked) {
        paraLen = "/long";
    }
    getLorem();
})


// Lorum Ipsum options



// Get Lorem Ipsum
async function getLorem() {
    if (input.value <= 0) {
        results.innerHTML = "";
    } else {
        showLoading();
        response = await fetch(`${url} + ${input.value} + ${paraLen}`);
        data = await response.text();
        results.innerHTML = data;
        console.log(url + input.value + paraLen)
    }
}
