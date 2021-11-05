// urls
const api = "https://api.lyrics.ovh/v1/";

// search consts
let artist = document.getElementById("getArtist");
let song = document.getElementById("getSong");

// loading
const loading = document.querySelector(".loading");

// results
const results = document.querySelector(".results");

// consts for copy to clipboard
const btnCopy = document.getElementById("btnCopy");

// onload placeholder data
async function onLoad() {
    response = await fetch("https://api.lyrics.ovh/v1/a-ha/take on me");
    data = await response.json();
    results.innerHTML = data.lyrics;
}
onLoad();

// Show loading spinner
function showLoading() {
    if (loading.style.display === "none") {
        loading.style.display = "block";
    } else {
        loading.style.display = "block";
    }
}

// Copy to clipboard
btnCopy.onclick = function () {
    var currentRange;
    if (document.getSelection().rangeCount > 0) {
        currentRange = document.getSelection().getRangeAt(0);
        window.getSelection().removeRange(currentRange);
    } else {
        currentRange = false;
    }
    var CopyRange = document.createRange();
    CopyRange.selectNode(results);
    window.getSelection().addRange(CopyRange);
    document.execCommand("copy");
    window.getSelection().removeRange(CopyRange);
    if (currentRange) {
        window.getSelection().addRange(currentRange);
    }
    document.getElementById("btnCopy").innerHTML = "Copied!";
    console.log("Text copied to clipboard")
    setTimeout(function () {
        document.getElementById("btnCopy").innerHTML = "Copy to Clipboard";
    }, 2000)
}


async function getLyrics() {

    try {
        artist = artist.value;
        song = `/${song.value}`;
        response = await fetch(api + artist + song);
        data = await response.json();
        console.log(data);
        results.innerHTML = data.lyrics;
    } catch (error) {
        results.innerHTML = "No lyrics found";
    }
}