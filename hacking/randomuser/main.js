// API documentation can be found here: https://randomuser.me/

// consts for user info
const photo = document.querySelector(".photo");
const gender = document.querySelector(".gender");
const title = document.querySelector(".title");
const first = document.querySelector(".first");
const last = document.querySelector(".last");
const street = document.querySelector(".street");
const city = document.querySelector(".city");
const state = document.querySelector(".state");
const postcode = document.querySelector(".postcode");
const country = document.querySelector(".country");
const email = document.querySelector(".email");
const dob = document.querySelector(".dob");
const age = document.querySelector(".age");
const cell = document.querySelector(".cell");

const url = "https://randomuser.me/api/";

// main
async function getRandomUser() {
    response = await fetch(url);
    data = await response.json();
    console.log(data);
    // name
    gender.innerHTML = data.results[0].gender;
    title.innerHTML = data.results[0].name.title;
    first.innerHTML = data.results[0].name.first;
    last.innerHTML = data.results[0].name.last;
    // address
    street.innerHTML = data.results[0].location.street.number + " " + data.results[0].location.street.name;
    city.innerHTML = data.results[0].location.city;
    state.innerHTML = data.results[0].location.state;
    postcode.innerHTML = data.results[0].location.postcode;
    country.innerHTML = data.results[0].location.country;
    // email
    email.innerHTML = data.results[0].email;
    // dob
    bday = data.results[0].dob.date;
    bdayTrim = bday.slice(0, 10);
    dob.innerHTML = bdayTrim;
    age.innerHTML = data.results[0].dob.age;
    // cell
    cell.innerHTML = data.results[0].cell;
    // picture
    pictureURL = data.results[0].picture.large;
    IMG = document.createElement('img');
    IMG.src = pictureURL;
    Div = document.querySelector(".photo");
    Div.appendChild(IMG);
}

getRandomUser();
