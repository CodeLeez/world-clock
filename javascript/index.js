function updateTime() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss: [<small>]A[</small>]"
    );
  }
  let beijingElement = document.querySelector("#beijing");
  if (beijingElement) {
    let beijingDateElement = beijingElement.querySelector(".date");
    let beijingTimeElement = beijingElement.querySelector(".time");
    let beijingTime = moment().tz("Asia/Beijing");

    beijingDateElement.innerHTML = beijingTime.format("MMMM Do YYYY");
    beijingTimeElement.innerHTML = beijingTime.format(
      "h:mm:ss: [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm:ss:"
          )} <small>${cityTime.format("A")} </small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
