// consts
const url = "https://api.icndb.com/jokes/random";
const joke = document.querySelector(".joke");

async function chucknorrisIO() {
    response = await fetch(url);
    data = await response.json();
    joke.innerHTML = data.value.joke;
}
chucknorrisIO();

