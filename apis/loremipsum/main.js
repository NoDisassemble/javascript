// consts for urls
const results = document.querySelector(".output");
const proxy = "https://api.codetabs.com/v1/proxy?quest=";
const api = "https://loripsum.net/api/";
const url = proxy + api;

// consts for paragraph length
const short = document.getElementById("para-len-short");
const medium = document.getElementById("para-len-medium");
const long = document.getElementById("para-len-long");

// const for options  
const links = document.getElementById("links");
const ul = document.getElementById("ul");
const ol = document.getElementById("ol");
const dl = document.getElementById("dl");
const bq = document.getElementById("bq");
const pre = document.getElementById("pre");
const headings = document.getElementById("headings");
const decorate = document.getElementById("decorate");
const allcaps = document.getElementById("allcaps");

// set options placeholders | Example: https://loripsum.net/api/5/medium/link/ul/ol/dl/bq/code/headers/decorate/allcaps
let paraLen = "/medium";
let linkOption = "";
let ulOption = "";
let olOption = "";
let dlOption = "";
let bqOption = "";
let preOption = "";
let headingsOption = "";
let decorateOption = "";
let allcapsOption = "";

// const for generate button
const btnGenerate = document.querySelector(".btn-generate");

// consts for copy to clipboard
const outputCopy = document.getElementById("results");
const btnCopy = document.getElementById("btnCopy");

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
// set link option
links.addEventListener("change", () => {
    if (links.checked) {
        linkOption = "/link";
    } else {
        linkOption = "";
    }
    getLorem();
})

// set ul option
ul.addEventListener("change", () => {
    if (ul.checked) {
        ulOption = "/ul";
    } else {
        ulOption = "";
    }
    getLorem();
})

// set ol option
ol.addEventListener("change", () => {
    if (ol.checked) {
        olOption = "/ol";
    } else {
        olOption = "";
    }
    getLorem();
})

// set dl option
dl.addEventListener("change", () => {
    if (dl.checked) {
        dlOption = "/dl";
    } else {
        dlOption = "";
    }
    getLorem();
})

// set blockquote option
bq.addEventListener("change", () => {
    if (bq.checked) {
        bqOption = "/bq";
    } else {
        bqOption = "";
    }
    getLorem();
})

// set pre option
pre.addEventListener("change", () => {
    if (pre.checked) {
        preOption = "/code";
    } else {
        preOption = "";
    }
    getLorem();
})

// set headings option
headings.addEventListener("change", () => {
    if (headings.checked) {
        headingsOption = "/headers";
    } else {
        headingsOption = "";
    }
    getLorem();
})

// set decorate option
decorate.addEventListener("change", () => {
    if (decorate.checked) {
        decorateOption = "/decorate";
    } else {
        decorateOption = "";
    }
    getLorem();
})

// set all caps option
allcaps.addEventListener("change", () => {
    if (allcaps.checked) {
        allcapsOption = "/allcaps";
    } else {
        allcapsOption = "";
    }
    getLorem();
})

// generate lorem ipsum
btnGenerate.onclick = function () {
    getLorem();
}

// Copy to clipboard (janky only works on initial load)
btnCopy.onclick = function () {
    outputRange = document.createRange();
    outputRange.selectNode(outputCopy);
    window.getSelection().addRange(outputRange);
    document.execCommand("Copy");
    document.getElementById("btnCopy").innerHTML = "Copied!";
    setTimeout(function () {
        document.getElementById("btnCopy").innerHTML = "Copy to Clipboard";
    }, 2000)
}


// Get Lorem Ipsum
async function getLorem() {
    if (input.value <= 0) {
        results.innerHTML = "";
    } else {
        showLoading();
        response = await fetch(url + input.value + paraLen + linkOption + ulOption + olOption + dlOption +
            bqOption + preOption + headingsOption + decorateOption + allcapsOption);
        data = await response.text();
        results.innerHTML = data;
        console.log(url + input.value + paraLen + linkOption + ulOption + olOption + dlOption + bqOption +
            preOption + headingsOption + decorateOption + allcapsOption)
    }
}
