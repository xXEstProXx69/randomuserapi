let name = document.querySelector("#name");
let age = document.querySelector("#age");
let country = document.querySelector("#country");
let email = document.querySelector("#email");
let maleradio = document.querySelector("#male");
let femaleradio = document.querySelector("#female");
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
    femaleradio.checked = true;
  } else {
    maleradio.checked = true;
  }

  name.value = userData.name.first + " " + userData.name.last;
  age.value = userData.dob.age;
  country.value = userData.location.country;
  email.value = userData.email;

  console.log(userData);
}

const dgetbtn = document.querySelector("#getdatabtn");
dgetbtn.addEventListener("click", getData);