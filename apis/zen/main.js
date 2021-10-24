const para = document.querySelector(".para");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");

const proxy = "https://api.codetabs.com/v1/proxy?quest="
const api = "https://zenquotes.io/api/random";

const url = proxy + api;


// Show loading spinner
function showLoading() {
    loading = document.querySelector(".loading");
    document.querySelector(".para").innerHTML = "";
    document.querySelector(".author").innerHTML = "";
    if (loading.style.display === "none") {
        loading.style.display = "block";
    } else {
        loading.style.display = "none";
    }
}
showLoading();

async function boredAPI() {
    showLoading();
    response = await fetch(url);
    data = await response.json();
    console.log(data)
    showLoading();
    para.textContent = data[0].q;
    author.textContent = `-${data[0].a}`;
}

btn.addEventListener('click', boredAPI)

boredAPI();