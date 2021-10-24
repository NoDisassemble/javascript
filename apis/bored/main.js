const para = document.querySelector(".para");
const btn = document.querySelector(".btn");

const url = "https://www.boredapi.com/api/activity/";


// Show loading spinner
function showLoading() {
    loading = document.querySelector(".loading");
    document.querySelector(".para").innerHTML = "";
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
    showLoading();
    para.textContent = `${data.activity}.`
}

btn.addEventListener('click', boredAPI)

boredAPI();
