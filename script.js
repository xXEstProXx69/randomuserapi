async function getData() {
  const response = await fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400");
  const data = await response.json();
  console.log(data);
}
const dgetbtn = document.querySelector("#getdatabtn")

dgetbtn.addEventListener("click", function() {
	getData()
	console.log("Click")
})