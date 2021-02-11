window.onload = function () {
  let calendar = document.querySelector("#calendar");

  for (i = 0; i < 76; i++) {
    const child = document.createElement("div");
    child.className = "day";

    const dayLabel = document.createElement("h3");
    const dayOfTheMonth = i + 1;
    dayLabel.innerText = dayOfTheMonth;
    child.appendChild(dayLabel);
    calendar.appendChild(child);
  }
};

const input = document.getElementById("ben");
const y2 = document.getElementsByName("h3").innerText;

const randomNumber = function () {
  input.value = Math.floor(Math.random() * 76) + 1;
};
