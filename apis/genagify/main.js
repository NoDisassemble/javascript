// API documentation can be found here: https://genderize.io/ & https://agify.io/

// consts for query selectors info
const name = document.querySelector(".name");
const gender = document.querySelector(".gender");
const probability = document.querySelector(".probability");
const age = document.querySelector(".age");


// get Name
function getName(input) {
    userName = input.value;
    console.log(userName);
    gen = `https://api.genderize.io?name=${userName}`;
    console.log(gen);
    userAge = `https://api.agify.io/?name=${userName}`;
}

// main
async function getNameAndAge() {
    response = await fetch(gen);
    data = await response.json();
    name.innerHTML = `Name: ${data.name}`;
    gender.innerHTML = `Gender: ${data.gender}`;
    probability.innerHTML = `Probability: ${data.probability}`;

    response = await fetch(userAge);
    data = await response.json();
    age.innerHTML = `Age: ${data.age}`;


    console.log(data)
}
