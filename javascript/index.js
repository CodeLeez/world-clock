function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );

  let beijingElement = document.querySelector("#beijing");
  let beijingDateElement = beijingElement.querySelector(".date");
  let beijingTimeElement = beijingElement.querySelector(".time");
  let beijingTime = moment().tz("Asia/Beijing");

  beijingDateElement.innerHTML = beijingTime.format("MMMM Do YYYY");
  beijingTimeElement.innerHTML = beijingTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1);
