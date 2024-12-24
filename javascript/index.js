let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment();

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>]");
