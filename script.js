let name = document.querySelector("#name");
let age = document.querySelector("#age");
let country = document.querySelector("#country");
let email = document.querySelector("#email");
let male = document.querySelector("#male");
<<<<<<< HEAD
let female = document.querySelector("#female");
let userData;

async function getData() {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/",
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }
  );

  const data = await response.json();

  userData = data.results[0];
  console.log(userData);

  let gender = userData.gender;

  if (gender === "female") {
    female.checked = true;
  } else {
    male.checked = true;
  }

  name.value = userData.name.first + " " + userData.name.last;
  age.value = userData.dob.age;
  country.value = userData.location.country;
  email.value = userData.email;

  console.log(userData);
}

const dgetbtn = document.querySelector("#getdatabtn");
dgetbtn.addEventListener("click", getData);
=======
let female = document.querySelector("#female")
let userData;

async function getData() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();


userData = data.results[0];

  let gender = userData.gender;

if (gender === "female") {
  female.checked = true;
  } else {
    male.checked = true;
  }

  name.value = userData.name.first + " " + userData.name.last;
  console.log(name.value)
  age.value = userData.dob.age;
  country.value = userData.location.country;
  email.value = userData.email;
  console.log(userData)
}
const dgetbtn = document.querySelector("#getdatabtn")
dgetbtn.addEventListener("click", getData)
  

  


>>>>>>> 0669ba54fd66e7039d02926f6df7bb49e4bb7d54
